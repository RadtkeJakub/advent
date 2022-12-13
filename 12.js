import { readFileSync } from "fs";

const file = readFileSync("./data/12.txt", "utf-8");
const map = file.split("\n").map((val) => val.replace("\r", "").split(""));
const start = [20, 0];
let steps = [];

map[start[0]][start[1]].charCodeAt(0);
console.log(map[start[0]][start[1]].charCodeAt(0));
console.log("E".charCodeAt(0));

function getPath() {
  if (char === 69) return 0;
}
