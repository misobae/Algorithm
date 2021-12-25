let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let numA = parseInt(input[0])
let numB = parseInt(input[1])

let numB1 = numB % 10
let numB2 = Math.floor((numB % 100) / 10)
let numB3 = Math.floor(numB / 100)

console.log(numA * numB1)
console.log(numA * numB2)
console.log(numA * numB3)
console.log(numA * numB)