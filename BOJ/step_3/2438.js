let input = require('fs').readFileSync('example.txt')

for (let i = 1;i <= input;i++){
  console.log('*'.repeat(i))
}