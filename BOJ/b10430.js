let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

const numA = parseInt(input[0])
const numB = parseInt(input[1])
const numC = parseInt(input[2])

console.log((numA + numB) % numC)
console.log(((numA % numC) + (numB % numC)) % numC)
console.log((numA * numB) % numC)
console.log(((numA % numC) * (numB % numC)) % numC)