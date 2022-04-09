const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const points = input[1].split(' ');
const max = Math.max.apply(null, points);
let sum = 0;

for(let i = 0; i < points.length; i++) {
    sum += points[i] / max * 100;
}

console.log(sum / input[0]);