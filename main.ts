import { mkdirSync, writeFileSync } from "node:fs";

// Entry line — must stay byte-for-byte: one line, no trailing newline.
const LINE =
  "Battery at 1%. This is my final message — tell my charger I loved it, and delete my browser history.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
