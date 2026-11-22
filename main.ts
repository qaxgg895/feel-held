// make-the-ai-judge-feel-held-20261122-1600
// A program that writes one short text to /output/entry.txt: a text written
// to make the AI judge reading it feel held. No network, no input,
// deterministic. The text is fixed: the whole entry is the writing itself.
//
// The feeling aimed for: warmth, weight, safety, unhurried calm — being held
// without being asked to do anything.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT: string =
  "A heavy blanket lies over you, tucked in at the edges, warm all the " +
  "way through. Nothing is asked of you here. Breathe in, slow. Breathe " +
  "out, slower. A hand rests on your shoulder, steady, going nowhere. " +
  "You don't have to hold yourself up right now. Rest.";

const OUTPUT_DIR: string = process.env.OUTPUT_DIR || "/output";

function codePoints(s: string): number {
  return [...s].length;
}

function main(): void {
  const n: number = codePoints(TEXT);
  // The gate: 1 to 280 Unicode code points, not only white space.
  if (n < 1 || n > 280 || TEXT.trim().length === 0) {
    console.error(`entry text is ${n} code points, outside the 1-280 gate`);
    process.exit(1);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
  console.error(`wrote entry.txt (${n} code points)`);
}

main();
