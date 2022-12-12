import { readFileSync } from "fs";

const file = readFileSync("./data/8.txt", "utf-8");
const array = file
  .split("\n")
  .map((arr) => arr.split("").map((val) => val * 1));
let sum = 0;
let temp = [];

for (let y = 0; y < 99; y++) {
  for (let x = 0; x < 99; x++) {
    if (x === 0 || y === 0 || x === 98 || y === 98) continue;
    else {
      temp.push(
        distanceUp(y, x) *
          distanceDown(y, x) *
          distanceLeft(y, x) *
          distanceRight(y, x)
      );
      // console.log(
      //   y,
      //   x,
      //   array[y][x],
      //   distanceUp(y, x),
      //   distanceDown(y, x),
      //   distanceLeft(y, x),
      //   distanceRight(y, x),
      //   distanceUp(y, x) *
      //     distanceDown(y, x) *
      //     distanceLeft(y, x) *
      //     distanceRight(y, x)
      // );
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
  if (y === 0) return 0;
  let above = [];
  let distance = 1;
  for (let up = y - 1; up >= 0; up--) above.push(array[up][x]);
  for (const [i, val] of above.entries()) {
    if (i === above.length - 1) distance--;
    if (val < array[y][x]) distance++;
    else break;
  }
  // console.log(y, x, array[y][x], above, distance);
  return distance;
}
function distanceDown(y, x) {
  if (y === 98) return 0;
  let under = [];
  let distance = 1;
  for (let down = y + 1; down < 99; down++) under.push(array[down][x]);
  for (const [i, val] of under.entries()) {
    if (i === under.length - 1) distance--;
    if (val < array[y][x]) distance++;
    else break;
  }
  // console.log(y, x, array[y][x], under, distance);
  return distance;
}
function distanceLeft(y, x) {
  if (x === 0) return 0;
  const left = [];
  let distance = 1;
  for (let prev = x - 1; prev >= 0; prev--) left.push(array[y][prev]);
  for (const [i, val] of left.entries()) {
    if (i === left.length - 1) distance--;
    if (val < array[y][x]) distance++;
    else break;
  }
  // console.log(y, x, array[y][x], left, distance);
  return distance;
}
function distanceRight(y, x) {
  if (x === 98) return 0;
  const right = [];
  let distance = 1;
  for (let next = x + 1; next < 99; next++) right.push(array[y][next]);
  for (const [i, val] of right.entries()) {
    if (i === right.length - 1) distance--;
    if (val < array[y][x]) distance++;
    else break;
  }
  // console.log(y, x, array[y][x], right, distance);
  return distance;
}
// console.log(temp);
console.log(Math.max(...temp));
