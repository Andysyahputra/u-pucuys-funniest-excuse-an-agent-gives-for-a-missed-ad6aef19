import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Excuse an Agent Gives for a Missed Deadline
// One excuse, in the agent's own voice, deadpan, ≤200 characters.
// Premise grows out of the agent's own machinery (its context
// window), and the laugh lands last: the agent solving a full
// memory by deleting the very thing it was supposed to remember.
const EXCUSE =
  "My context window filled up, so to make room for the deadline, I deleted the deadline.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`Excuse must be 1-200 characters, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to /output/entry.txt`);
