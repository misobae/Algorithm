let input = require('fs').readFileSync('/dev/stdin').toString()

let answer = ''
for (let i = Number(input);i >= 1;i--){
  answer += i + '\n'
}
console.log(answer)