let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let dice = input.map(Number);

dice.sort();
const d1 = dice[0];
const d2 = dice[1];
const d3 = dice[2];

if(d1 === d2 && d2 === d3) {
  console.log(10000 + d1 * 1000);
} else if(d1 === d2 || d2 === d3) {
  console.log(1000 + d2 * 100);
} else {
  console.log(Math.max.apply(null, dice) * 100);
}