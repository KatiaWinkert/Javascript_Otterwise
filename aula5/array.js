const arr = [10, 20, 30, 40, 50]


const elemen = arr.shift() // .shift pega o primeiro elemento do array.
const element = arr.pop() // .pop pega o ultimo elemento do array.

console.log('elemen:', elemen)
console.log('element:', element)
console.log('array original:', arr.length)

//const newarray = arr.slice(3) esse metodo especifica a cada so elementos no caso ali arr.slice(3) apresenta o 40,50 a partir do 3 elemento ele especifica.
//const newarray = arr.join('|') metodo .join é usado para separar os elementos como nesse exemplo: 1|2|3
//const newarray = [].concat(arr, [5,7,9,])
//console.log(newarray)
//arr.push(5, 7, 9) // metodo push ele altera a instancia e ainda acrescenta elementos ao final.
console.log(arr)

//const newarray = arr.reverse() - Ele altera a o array original invertendo as posiçoes dos elementos [ 50, 40, 30, 20, 10 ]
