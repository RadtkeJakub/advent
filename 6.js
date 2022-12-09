import { readFileSync } from "fs";

const file = readFileSync("./data/6.txt", "utf-8");
const string = file;

for (let i = 14; i < string.length; i++) {
  const letters = string.slice(i - 14, i);
  const set = new Set(letters);
  if (set.size === 14) {
    console.log(i);
    break;
  }
}
