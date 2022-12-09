import { readFileSync } from "fs";

const file = readFileSync("./data/7.txt", "utf-8");
const commands = file.split("\n");

const path = [];
let ls = false;
const folders = {};
let key = "";
const SPACE = 70000000;

for (const command of commands) {
  const commandArr = command.split(" ");
  if (commandArr[0] !== "$" && ls === false) continue;
  if (commandArr[1] === "ls") {
    ls = true;
  } else if (commandArr[1] === "cd") {
    ls = false;
    if (commandArr[2] === "..") {
      path.pop();
    } else {
      path.push(commandArr[2]);
    }
  } else {
    if (commandArr[0] !== "dir") {
      for (const [i, folder] of path.entries()) {
        key += folder;
        if (!folders[key]) folders[key] = 0;
        folders[key] = folders[key] + commandArr[0] * 1;
      }
      key = "";
    }
  }
}

function setObjectValue(obj, path, value) {
  path.slice(0, -1).reduce((init, key) => {
    if (!init[key]) init[key] = {};
    return init[key];
  }, obj)[path[path.length - 1]] = value;

  return obj;
}

const memoryNeeded = Math.abs(70000000 - (folders["/"] + 30000000));

let memory;
const sum = Math.min(
  ...Object.values(folders)
  .filter((val) => val - memoryNeeded > 0)
);

console.log(sum);
