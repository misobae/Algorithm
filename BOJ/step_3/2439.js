let input = require('fs').readFileSync('example.txt').toString()

let num = Number(input)

for (let i = 1; i <= num; i++){
  console.log(" ".repeat(num - i) + "*".repeat(i))
}