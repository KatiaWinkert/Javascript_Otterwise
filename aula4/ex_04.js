

function checZero(num) {
return (!num && `${num} é zero`) || `${num} não é zero`
}

console.log(checZero(0))
console.log(checZero(33))
console.log(checZero(100000000))
console.log(checZero(-500))