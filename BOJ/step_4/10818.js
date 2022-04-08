let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')[1].split(' ');

let max = input[0];
let min = input[0];

for(let i = 0; i < input.length; i++){
    let num = Number(input[i]);
    if(min > num) {
        min = num;
    }

    if(max < num) {
        max = num;
    }
}
console.log(`${min} ${max}`);