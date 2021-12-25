let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

const numA = parseInt(input[0])
const numB = parseInt(input[1])

if (numA > numB){
  console.log('>')
} else if (numA < numB){
  console.log('<')
} else {
  console.log('==')
}