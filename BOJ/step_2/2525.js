let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let h = Number(input[0].split(' ')[0]);
let min = Number(input[0].split(' ')[1]);
let cookTime = Number(input[1]);

if(min + cookTime >= 60) {
    h += Math.floor((min + cookTime) / 60);
    min = (min + cookTime) % 60;
} else {
    min += cookTime;
}

if(h >= 24) {
    h = (h % 24);
}
console.log(h+' '+min);