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
  const attributes = ts.isJsxElement(node)
    ? node.openingElement.attributes
    : ts.isJsxSelfClosingElement(node)
      ? node.attributes
      : null;

  if (!attributes) return null;

  for (const attr of attributes.properties) {
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

function getReplacementForLink(node, sourceText) {
  if (!ts.isJsxElement(node)) {
    return null;
  }

  const opening = node.openingElement;
  const closing = node.closingElement;

  if (!closing) return null;

  const tagName = opening.tagName.getText();

  if (tagName !== "Link" && tagName !== "a") {
    return null;
  }

  const href = getAttribute(node, "href");
  const value = href && getStringValue(href.initializer);

  if (!value || !value.startsWith("/ads/")) {
    return null;
  }

  /*
   * Preserve everything inside the link and remove only
   * the <Link ...> / </Link> or <a ...> / </a> wrapper.
   */
  const start = opening.getStart();
  const end = closing.getEnd();

  const childrenStart = opening.getEnd();
  const childrenEnd = closing.getStart();

  const children = sourceText.slice(childrenStart, childrenEnd);

  return {
    start,
    end,
    replacement: children,
    href: value,
  };
}

const files = getFiles(ROOT);

let modifiedFiles = 0;
let removedLinks = 0;

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

  const edits = [];

  function visit(node) {
    const replacement = getReplacementForLink(node, sourceText);

    if (replacement) {
      edits.push(replacement);
      return;
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (!edits.length) continue;

  /*
   * Apply from the bottom of the file upward so source positions
   * remain valid.
   */
  edits.sort((a, b) => b.start - a.start);

  let updated = sourceText;

  for (const edit of edits) {
    updated =
      updated.slice(0, edit.start) +
      edit.replacement +
      updated.slice(edit.end);

    removedLinks++;
  }

  fs.writeFileSync(file, updated, "utf8");

  modifiedFiles++;

  console.log(
    `Updated ${path.relative(process.cwd(), file)} — ${edits.length} link(s)`
  );
}

console.log("\n============================================================");
console.log("CLEANUP SUMMARY");
console.log("============================================================");
console.log(`Files modified: ${modifiedFiles}`);
console.log(`Dead /ads/ links removed: ${removedLinks}`);
console.log("Article content was preserved.");
