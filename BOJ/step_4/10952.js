let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let i = 0
let answer = ""

while (i <= input.length -1 ) {
    let numA = parseInt(input[i].split(' ')[0])
    let numB = parseInt(input[i].split(' ')[1])

    if (numA !== 0 || numB !== 0) {
        answer += `${numA + numB}` + '\n'
    } else {
        break
    }
    i++
}
console.log(answer)