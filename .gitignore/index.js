let input = require('fs').readFileSync('example.txt').toString().split(' ')

const numA = parseInt(input[0])
const numB = parseInt(input[1])

console.log(numA + numB)
console.log(numA - numB)
console.log(numA * numB)
console.log(Math.floor(numA / numB))
console.log(numA % numB)