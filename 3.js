import { readFileSync } from "fs";
import { nextTick } from "process";

const file = readFileSync("./data/3b.txt", "utf-8");
let groupArr = [];
const array = file.split("\n").reduce((init, value, i) => {
  groupArr.push(value);
  if ((i + 1) % 3 === 0) {
    init.push(groupArr);
    groupArr = [];
  }
  return init;
}, []);

// first part
// const sum = array.reduce((init, value) => {
//   const firstHalf = value.slice(0, value.length / 2);
//   const secondHalf = value.slice(value.length / 2);

//   for (const char of firstHalf) {
//     if (secondHalf.includes(char)) {
//       const charCode = char.charCodeAt(0);
//       init += charCode > 90 ? charCode - 96 : charCode - 38;
//       break;
//     }
//   }

//   return init;
// }, 0);

// console.log(sum);

const sum = array.reduce((init, value) => {
  for (const char of value[0])
    if (value[1].includes(char) && value[2].includes(char)) {
      const charCode = char.charCodeAt(0);
      init += charCode > 90 ? charCode - 96 : charCode - 38;
      break;
    }

  return init;
}, 0);

console.log(sum);
