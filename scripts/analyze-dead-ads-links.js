const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const ROOT = path.join(process.cwd(), "app/blog");

function getFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) return getFiles(full);

    return entry.name === "page.tsx" ? [full] : [];
  });
}

function getAttribute(node, name) {
  if (!node.attributes) return null;

  for (const attr of node.attributes.properties) {
    if (ts.isJsxAttribute(attr) && attr.name.text === name) {
      return attr;
    }
  }

  return null;
}

function getStringValue(initializer) {
  if (!initializer) return null;

  if (ts.isStringLiteral(initializer)) {
    return initializer.text;
  }

  if (ts.isJsxExpression(initializer) && initializer.expression) {
    if (ts.isStringLiteral(initializer.expression)) {
      return initializer.expression.text;
    }
  }

  return null;
}

function getTagName(node) {
  if (ts.isJsxElement(node)) {
    return node.openingElement.tagName.getText();
  }

  if (ts.isJsxSelfClosingElement(node)) {
    return node.tagName.getText();
  }

  return null;
}

function getText(node) {
  return node.getText().replace(/\s+/g, " ").trim();
}

const files = getFiles(ROOT);

let fileCount = 0;
let linkCount = 0;

for (const file of files) {
  const sourceText = fs.readFileSync(file, "utf8");

  if (!sourceText.includes("/ads/")) continue;

  const sourceFile = ts.createSourceFile(
    file,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );

  const links = [];

  function visit(node) {
    const tagName = getTagName(node);

    if (tagName === "Link" || tagName === "a") {
      const href = getAttribute(
        ts.isJsxElement(node)
          ? node.openingElement
          : node,
        "href"
      );

      const value = href && getStringValue(href.initializer);

      if (value && value.startsWith("/ads/")) {
        links.push({
          line:
            sourceFile.getLineAndCharacterOfPosition(
              node.getStart()
            ).line + 1,
          tag: tagName,
          href: value,
          text: getText(node).slice(0, 180),
        });
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (!links.length) continue;

  fileCount++;
  linkCount += links.length;

  console.log("\n============================================================");
  console.log(path.relative(process.cwd(), file));
  console.log("============================================================");

  for (const link of links) {
    console.log(`${link.line}: <${link.tag}> ${link.href}`);

    if (link.text) {
      console.log(`    text: ${link.text}`);
    }
  }
}

console.log("\n============================================================");
console.log("SUMMARY");
console.log("============================================================");
console.log(`Files with /ads/ JSX links: ${fileCount}`);
console.log(`Total /ads/ JSX links: ${linkCount}`);
console.log("NO FILES WERE MODIFIED.");
