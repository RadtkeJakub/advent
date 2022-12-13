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
  val.splice(5, 2);
  return val;
});

monkeys = monkeys.map((monkey) =>
  monkey.map((val) => {
    if (typeof val === "string") return val.replace("\r", "");
    else return val;
  })
);

const divider = monkeys.reduce((init, monkey) => {
  return (init = init * monkey[2]);
}, 1);

console.log(monkeys);
for (let i = 0; i < 10000; i++) {
  for (const [m, monkey] of monkeys.entries()) {
    for (const item of monkey[0]) {
      let stress = 0;
      score[m]++;
      if (monkey[1].includes("* old")) {
        stress = item * item;
      } else if (monkey[1].includes("+ ")) {
        stress = item + monkey[1].split("+ ")[1] * 1;
      } else if (monkey[1].includes("* ")) {
        stress = item * monkey[1].split("* ")[1] * 1;
      }

      if ((stress % divider) % monkey[2] === 0) {
        monkeys[monkey[3]][0].push(stress % divider);
      } else {
        monkeys[monkey[4]][0].push(stress % divider);
      }
    }
    monkey[0] = [];
  }
  // console.log(i, monkeys);
}

console.log(divider);

// console.log(monkeys);
console.log(
  score.sort((a, b) => b - a),
  score[0] * score[1]
);
