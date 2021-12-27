let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let answer = ''
for (let i = 1;i <= input[0];i++){
  let t = input[i].split(' ')
  answer += Number(t[0]) + Number(t[1]) + '\n'
}
console.log(answer)