import { readFileSync } from "fs";

const file = readFileSync("./data/11.txt", "utf-8");
let monkeys = file
  .split("Monkey")
  .map((val) => val.split("\n"))
  .map((val) => {
    return val.splice(1, val.length - 1);
  });
let score = [0, 0, 0, 0, 0, 0, 0, 0];
monkeys = monkeys.splice(1, monkeys.length - 1).map((val) => {
  val[0] = val[0]
    .replace(/\D+/g, ",")
    .split(",")
    .filter((val) => val)
    .map((val) => val * 1);
  val[1] = val[1].split("old ")[1];
  val[2] = val[2].replace(/\D+/g, "") * 1;
  val[3] = val[3].replace(/\D+/g, "") * 1;
  val[4] = val[4].replace(/\D+/g, "") * 1;
  return val;
});

for (let i = 0; i < 20; i++) {
  for (const [m, monkey] of monkeys.entries()) {
    for (let j = 0; j < monkey[0].length; j++) {
      let item = monkey[0][j];
      score[m]++;
      let worryLevel = 0;

      if (monkey[1].includes("* old")) {
        worryLevel = item * item;
      } else if (monkey[1].includes("+")) {
        // console.log("plus");
        worryLevel = item + monkey[1].split(" ")[1] * 1;
      } else if (monkey[1].includes("*")) {
        // console.log("*");
        worryLevel = item * monkey[1].split(" ")[1] * 1;
      }

      if (Math.floor(worryLevel / 3) % monkey[2] === 0) {
        monkeys[monkey[3]][0].push(monkey[0].shift());
        j = j - 1;
      } else {
        monkeys[monkey[4]][0].push(monkey[0].shift());
        j = j - 1;
      }
    }
  }
  // console.log(monkeys);
}

console.log(score.sort((a, b) => b - a));
// console.log(monkeys);
