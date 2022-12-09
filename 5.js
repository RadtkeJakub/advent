import { readFileSync } from "fs";

const file = readFileSync("./data/5.txt", "utf-8");
const moves = file.split("\n").map((m) =>
  m
    .replace(/[a-z]/g, " ")
    .split(" ")
    .filter((n) => n)
    .map((n) => n * 1)
);

let container = [
  ["S", "T", "H", "F", "W", "R"],
  ["S", "G", "D", "Q", "W"],
  ["B", "T", "W"],
  ["D", "R", "W", "T", "N", "Q", "Z", "J"],
  ["F", "B", "H", "G", "L", "V", "T", "Z"],
  ["L", "P", "T", "C", "V", "B", "S", "G"],
  ["Z", "B", "R", "T", "W", "G", "P"],
  ["N", "G", "M", "T", "C", "J", "R"],
  ["L", "G", "B", "W"],
];

for (const move of moves) {
  // for (let i = 0; i < move[0]; i++) {
  //   const letter = container[move[1] - 1].pop();
  //   container[move[2] - 1].push(letter);
  // }
  const numberOfItemsToMove = move[0];
  const moveFrom = move[1] - 1;
  const moveTo = move[2] - 1;
  let tempArr = [];
  for (let i = 0; i < numberOfItemsToMove; i++) {
    const letter = container[moveFrom].pop();
    tempArr.unshift(letter);
  }

  for (let i = 0; i < numberOfItemsToMove; i++) {
    const letter = tempArr.shift();
    container[moveTo].push(letter);
  }
}

console.log(container);

console.log(
  container.reduce((init, val) => {
    return (init += val[val.length - 1]);
  }, "")
);
