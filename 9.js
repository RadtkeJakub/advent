import { readFileSync } from "fs";

const file = readFileSync("./data/9.txt", "utf-8");
const moves = file.split("\n").map((val) => val.replace("\r", "").split(" "));
const set = new Set();
set.add("00");
const head = [0, 0];
const tail = [];
for (let i = 0; i < 9; i++) {
  tail.push([0, 0]);
}

for (const move of moves) {
  console.log(move);
  for (let i = 0; i < move[1] * 1; i++) {
    switch (move[0]) {
      case "L": {
        head[0] = head[0] - 1;
        moveTail();
        break;
      }
      case "R": {
        head[0] = head[0] + 1;
        moveTail();
        break;
      }
      case "U": {
        head[1] = head[1] + 1;
        moveTail();
        break;
      }
      case "D": {
        head[1] = head[1] - 1;
        moveTail();
        break;
      }
    }
  }
}

function moveTail() {
  if (
    Math.abs(tail[0][0] - head[0]) > 1 ||
    Math.abs(tail[0][1] - head[1]) > 1
  ) {
    if (head[0] > tail[0][0]) tail[0][0] = tail[0][0] + 1;
    if (head[0] < tail[0][0]) tail[0][0] = tail[0][0] - 1;
    if (head[1] > tail[0][1]) tail[0][1] = tail[0][1] + 1;
    if (head[1] < tail[0][1]) tail[0][1] = tail[0][1] - 1;

    // set.add(`${tail[0][0]}${tail[0][1]}`);
  }

  for (let i = 0; i < 8; i++) {
    if (
      Math.abs(tail[i + 1][0] - tail[i][0]) > 1 ||
      Math.abs(tail[i + 1][1] - tail[i][1]) > 1
    ) {
      if (tail[i][0] > tail[i + 1][0]) tail[i + 1][0] = tail[i + 1][0] + 1;
      if (tail[i][0] < tail[i + 1][0]) tail[i + 1][0] = tail[i + 1][0] - 1;
      if (tail[i][1] > tail[i + 1][1]) tail[i + 1][1] = tail[i + 1][1] + 1;
      if (tail[i][1] < tail[i + 1][1]) tail[i + 1][1] = tail[i + 1][1] - 1;

      if (i + 1 === 8) set.add(`${tail[i + 1][0]}${tail[i + 1][1]}`);
    }
  }
  // console.log(head, tail);
}
// console.log(set.values());
console.log(set.size);
