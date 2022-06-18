// Destructuring Assignment - Array

const array = [1, 2, 3, 4]

/*let number1 = array [0]
let number2 = array [2]
let number3 = array [3]
console.log(number1, number2, number3)*/
// ao inves de fazer a estrutura a cima pode se fazer esse a baixo:

let [number1, number2, , number3] = array
console.log(number1, number2, number3)

//--------------------
const [a, , , c] = array // => no lugar do const poderia ser let também.

console.log(a, c)

/*const array = [1, 2, 3, 4, 5]
let number = array[2]
console.log(number)*/
