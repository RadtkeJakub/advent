import { readFileSync } from "fs";

const file = readFileSync("./data/4.txt", "utf-8");
const array = file.split("\n").map((val) => val.split(","));
const sum = array.reduce((init, elfGroup) => {
  const f = elfGroup[0].split("-").map((val) => val * 1);
  const s = elfGroup[1].split("-").map((val) => val * 1);
  console.log(f, s);
  console.log(
    (f[0] >= s[0] && f[0] <= s[1]) ||
      (f[1] >= s[0] && f[1] <= s[1]) ||
      (f[0] <= s[0] && f[0] >= s[1]) ||
      (f[1] <= s[0] && f[1] >= s[1])
  );

  if (
    (f[0] >= s[0] && f[0] <= s[1]) ||
    (f[1] >= s[0] && f[1] <= s[1]) ||
    (f[0] <= s[0] && f[0] >= s[1]) ||
    (f[1] <= s[0] && f[1] >= s[1]) ||
    (f[0] >= s[0] && f[1] <= s[1]) ||
    (f[0] <= s[0] && f[1] >= s[1])
  )
    init++;
  return init;
}, 0);

console.log(sum);
