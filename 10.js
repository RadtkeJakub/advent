import { readFileSync } from "fs";

const file = readFileSync("./data/10.txt", "utf-8");
const array = file
  .replace("\\r", " ")
  .split("\n")
  .map((val) => val.replace("\r", ""));
let cycle = 0;
let x = 1;
let sum = [];

for (const line of array) {
  cycle++;
  checkX();
  if (line === "noop") {
  } else {
    x += line.split(" ")[1] * 1;
    cycle++;
    checkX();
  }
}

function checkX() {
  const show = [20, 60, 100, 140, 180, 220];
  // console.log(cycle, x, x * cycle);
  if (show.includes(cycle)) sum.push(x * cycle);
}

console.log(
  sum.reduce((init, val) => {
    return (init += val);
  }, 0)
);
