const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout 
})

let input = []

rl.on('line', function(line){
  let input = line.split(' ')

  let h = Number(input[0])
  let m = Number(input[1])
  
  if (m - 45 < 0){
    m = 60 + (m - 45)
    h -= 1
    if (h === -1){
      h = 23
    }
  } else {
    m -= 45
  }
  console.log(h + ' ' + m)
})
.on('close', function(){
  process.exit()
})