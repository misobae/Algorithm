let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

for (let i = 1;i <= input[0];i++){
  let t = input[i].split(' ')
  let num1 = Number(t[0])
  let num2 = Number(t[1])
  console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`)
}