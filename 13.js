import { readFileSync } from "fs";

const file = readFileSync("./data/13.txt", "utf-8");
const arrays = file
  .split("\n")
  .map((val) => val.split("\n"))
  .map((val) => val.filter((v) => v !== ""))
  .filter((val) => val.length !== 0)
  .map((val) => JSON.parse(val));
const l = [];
const r = [];
const sum = [];
for (let i = 0; i < arrays.length; i++) {
  if (i % 2 === 0) l.push(arrays[i]);
  else r.push(arrays[i]);
}

for (let i = 0; i < l.length; i++) {
  if (compare(l[i], r[i])) sum.push(i + 1);
}
function compare(l, r) {
  if (Array.isArray(l) && Array.isArray(r)) {
    let isValid = true;
    for (let i = 0; i < r.length; i++) {
      if (Array.isArray(l[i]) && Array.isArray(r[i])) {
        console.log("both arr", l[i], r[i], isValid);
        isValid = compare(l[i], r[i]);
      } else if (Array.isArray(l[i]) && !Array.isArray(r[i])) {
        console.log("r is not array", l[i], [r[i]], isValid);
        if (!r[i]) isValid = false;
        else isValid = compare(l[i], [r[i]]);
      } else if (!Array.isArray(l[i]) && Array.isArray(r[i])) {
        console.log("l is not array", [l[i]], r[i], isValid);
        isValid = compare([l[i]], r[i]);
      } else if (!l[i]) {
        break;
      } else if (l[i] > r[i]) {
        console.log("l > r", [l[i]], r[i], isValid);
        isValid = false;
      } else if (l[i].length > r[i].length) {
        console.log("l.length > r.length", [l[i]], r[i], isValid);
        isValid = false;
      }
      // console.log(l[i], r[i], isValid);
      if (!isValid) return false;
    }

    return isValid;
  } else {
    console.log("else");
  }
}

console.log(sum);
