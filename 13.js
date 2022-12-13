import { readFileSync } from "fs";

const file = readFileSync("./data/13.txt", "utf-8");
const arrays = file
  .split("\n")
  .map((val) => val.split("\n"))
  .map((val) => val.filter((v) => v !== ""))
  .filter((val) => val.length !== 0)
  .map((val) => {
    console.log(val);
    return val;
  });
const l = [];
const r = [];
const sum = [];
for (let i = 0; i < arrays.length; i++) {
  if (i % 2 === 0) l.push(arrays[i]);
  else r.push(arrays[i]);
}

function compare(l, r) {
  for (let i = 0; i < r.length; i++) {
    let isValid = true;
    if (Array.isArray(l[i]) && Array.isArray(r[i])) {
      isValid = compare(l[i], r[i]);
    } else if (!Array.isArray(l[i]) && Array.isArray(r[i])) {
      isValid = compare([l[i]], r[i]);
    } else if (Array.isArray(l[i]) && Array.isArray(r[i])) {
      isValid = compare(l[i], [r[i]]);
    } else if (!Array.isArray(l[i]) && !Array.isArray(r[i])) {
      if (l[i] > r[i]) isValid = false;
    }
    if (isValid) sum.push(i);
  }
}

compare(l, r);

console.log(sum);
