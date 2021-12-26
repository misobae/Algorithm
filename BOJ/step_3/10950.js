let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

for (let i = 1;i <= input[0];i++){
  let t = input[i].split(' ')
  console.log(Number(t[0]) + Number(t[1]))
}