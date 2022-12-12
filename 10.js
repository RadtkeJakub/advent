import { readFileSync } from "fs";

const file = readFileSync("./data/10.txt", "utf-8");
const array = file
  .replace("\\r", " ")
  .split("\n")
  .map((val) => val.replace("\r", ""));
let cycle = 1;
let x = 1;
let sum = [];
let string = "";

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
  console.log(
    "sprite position",
    cycle % 40 === x || cycle % 40 === x + 1 || cycle % 40 === x + 2,
    cycle % 40,
    x,
    x + 1,
    x + 2
  );
  if (cycle % 40 === x || cycle % 40 === x + 1 || cycle % 40 === x + 2)
    string += "#";
  else string += ".";
  if (cycle % 40 === 1) string += "\n";

  // console.log(cycle, x, x * cycle);
}
console.log(string);
console.log(
  sum.reduce((init, val) => {
    return (init += val);
  }, 0)
);
