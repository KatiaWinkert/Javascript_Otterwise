//1 excercicio 
function checksignal(number) {
  if (number >= 0) {
    console.log(number + ' se o numero for positivo')
  } else {
    console.log(number + ' se o numero for negativo')
  }
}
checksignal(-99)
checksignal(42)

console.log('__________________________________________________')
// 2 exercicio

function double(number){
  return number*2
}
console.log(double(5))

console.log('__________________________________________________')



function calculate(n1, n2) {
  return n1 + n2
}
const number1 = calculate(3,5)
console.log(`A soma é ${number1}`)
