import { readFileSync } from "fs";

const file = readFileSync("./data/8.txt", "utf-8");
const array = file
  .split("\n")
  .map((arr) => arr.split("").map((val) => val * 1));
let sum = 0;

for (let y = 0; y < 99; y++) {
  for (let x = 0; x < 99; x++) {
    if (x === 0 || y === 0 || x === 98 || y === 98) {
      sum++;
      continue;
    }

    if (
      checkUp(y, x) ||
      checkDown(y, x) ||
      checkLeft(y, x) ||
      checkRight(y, x)
    ) {
      sum++;
      continue;
    }
  }
}

function checkUp(y, x) {
  let above = [];
  for (let up = y - 1; up >= 0; up--) above.push(array[up][x]);
  return above.filter((val) => val >= array[y][x]).length === 0;
}
function checkDown(y, x) {
  let under = [];
  for (let down = y + 1; down < 99; down++) under.push(array[down][x]);
  return under.filter((val) => val >= array[y][x]).length === 0;
}
function checkLeft(y, x) {
  const left = array[y].slice(0, x);
  return left.filter((val) => val >= array[y][x]).length === 0;
}
function checkRight(y, x) {
  const right = array[y].slice(x + 1, 99);
  return right.filter((val) => val >= array[y][x]).length === 0;
}

function distanceUp(y, x) {
  let above = [];
  for (let up = y - 1; up >= 0; up--) above.push(array[up][x]);
  return above.filter((val) => val >= array[y][x]).length === 0;
}
function distanceDown(y, x) {
  let under = [];
  for (let down = y + 1; down < 99; down++) under.push(array[down][x]);
  return under.filter((val) => val >= array[y][x]).length === 0;
}
function distanceLeft(y, x) {
  const left = array[y].slice(0, x);
  return left.filter((val) => val >= array[y][x]).length === 0;
}
function distanceRight(y, x) {
  const right = array[y].slice(x + 1, 99);
  return right.filter((val) => val >= array[y][x]).length === 0;
}

console.log(sum);
