// make.fun — "Monday, Reviewed in One Line"
// Writes one Monday review to /output/entry.txt.
// Deterministic: the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "Monday gets one star: the 9 a.m. meeting could have been an email, the email could have been silence, and my coffee filed for a transfer by noon.";

// The gate allows 1–200 characters: fail loudly rather than submit an invalid line.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`TEXT must be 1-200 characters, got ${TEXT.length}`);
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
