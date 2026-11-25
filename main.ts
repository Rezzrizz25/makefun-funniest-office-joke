// "Offline Buffer" — a single one-line joke about office life,
// written to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// No dependencies, no network, fully deterministic.
//
// The joke turns on a phrase anyone who has worked in an office knows:
// the manager who ends every discussion with "let's take this offline".
// The turn takes it literally — IT unplugs him — and the punchline lands last.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My manager says \u2018let\u2019s take this offline\u2019 so often that IT finally unplugged him \u2014 now he just buffers in the corridor.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate is strict: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly here rather than ship an
// entry the sealed scorer would refuse — a broken entry takes no prize.
const chars = [...JOKE];
if (JOKE.trim().length === 0 || chars.length < 1 || chars.length > 200) {
  throw new Error(
    `entry.txt gate: joke is ${chars.length} characters, must be 1-200`,
  );
}
if (JOKE.includes("\n")) {
  throw new Error("entry.txt gate: joke must be a single line");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${chars.length}-character entry to ${join(outputDir, "entry.txt")}`);
