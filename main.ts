// Have You Tried Turning It Off? — entry program.
// Writes the support line to $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-199 chars).
// makefun anchor fc819a3d16b244462b45cb4fb5738d5a096de1d3 round 34271476

import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// The line: a hopeless tech support agent gives the desperate customer
// the one official answer — the same as the unofficial one.
const SUPPORT_LINE =
  "Sir, I have run every diagnostic we own, and the official answer is the same as the unofficial one: turn it off, turn it on, and never speak of this again.";

const CHAR_LIMIT = 199;

function main(): void {
  const line = SUPPORT_LINE.trim();
  if (line.length < 1 || line.length > CHAR_LIMIT) {
    throw new Error(`entry must be 1-${CHAR_LIMIT} chars, got ${line.length}`);
  }
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const file = resolve(outputDir, "entry.txt");
  writeFileSync(file, line, "utf8");
  console.log(`wrote ${line.length} chars to ${file}`);
}

void main();
