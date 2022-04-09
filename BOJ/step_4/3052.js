const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let arr = [];

for(let i = 0; i < input.length; i++) {
    arr.push(Number(input[i] % 42));
}

const dupValue = new Set(arr);
console.log(dupValue.size);
