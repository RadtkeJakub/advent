import { readFileSync } from "fs";

function getScore(a, b) {
  if (a === "A" && b === "X") return 4;
  if (a === "B" && b === "X") return 1;
  if (a === "C" && b === "X") return 7;

  if (a === "A" && b === "Y") return 8;
  if (a === "B" && b === "Y") return 5;
  if (a === "C" && b === "Y") return 2;

  if (a === "A" && b === "Z") return 3;
  if (a === "B" && b === "Z") return 9;
  if (a === "C" && b === "Z") return 6;
}

function getShape(a, b) {
  if (a === "A" && b === "X") return 3;
  if (a === "B" && b === "X") return 1;
  if (a === "C" && b === "X") return 2;

  if (a === "A" && b === "Y") return 4;
  if (a === "B" && b === "Y") return 5;
  if (a === "C" && b === "Y") return 6;

  if (a === "A" && b === "Z") return 8;
  if (a === "B" && b === "Z") return 9;
  if (a === "C" && b === "Z") return 7;
}

const file = readFileSync("./data/2b.txt", "utf-8");
const array = file.split("\n").map((str) => str.split(" "));

const sum = array.reduce((init, value) => {
  return (init += getScore(value[0], value[1]));
}, 0);

const sum2 = array.reduce((init, value) => {
  return (init += getShape(value[0], value[1]));
}, 0);

console.log(sum2);
