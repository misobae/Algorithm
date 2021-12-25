let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')
const result = parseInt(input[0]) / parseInt(input[1])
console.log(result)