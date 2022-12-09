import { readFileSync } from "fs";

const file = readFileSync("./data/1.txt", "utf-8");
const array = file.split("\n");
let elfCaloriesArr = [];
let currentTotal = 0;
for (const number of array) {
  if (!number) {
    elfCaloriesArr.push(currentTotal);
    currentTotal = 0;
  }
  currentTotal += number * 1;
}

console.log("top1: ", elfCaloriesArr.sort().reverse()[0]);
console.log(
  "top3: ",
  elfCaloriesArr
    .sort()
    .reverse()
    .slice(0, 3)
    .reduce((current, next) => (current += next))
);
