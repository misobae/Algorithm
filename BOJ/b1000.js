// require 메소드를 통해 외부 모듈 가져와서, 파일을 읽은 후, 숫자를 문자열로 바꾸고, 문자열을 구분자로 잘라 배열로 저장
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

// parseInt 메소드를 통해 문자열 인자를 정수로 반환
const a = parseInt(input[0])
const b = parseInt(input[1])
console.log(a+b)