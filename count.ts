import { platforms } from "./lib/platforms";
import { industries } from "./lib/industries";
import { cities } from "./lib/cities";
import { types } from "./lib/types";

console.log(platforms.length * industries.length * cities.length * types.length);