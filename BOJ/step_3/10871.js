let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let x = input[0].split(' ').map(x => Number(x))
let a = input[1].split(' ').map(x => Number(x))
let result = []

for (let i = 0;i <= x[0];i++) {
    if (a[i] < x[1]) {
        result.push(a[i])
    }
}
console.log(result.join(' '))