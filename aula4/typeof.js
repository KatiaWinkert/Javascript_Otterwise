const value = 42 // Typeof - Ele retorna o tipo do valor se é string ou number
if (typeof value === 'number') {
  console.log('é um numero!')
} else {
  console.log('Não é um numero!')
}
/*
console.log(typeof true)
console.log(typeof 42)
console.log(typeof 'string')
console.log(typeof undefined)
console.log(typeof null)
typeos para null, objecto e array - ele trata todos como object. 
*/
console.log(typeof {name: 'Katia'})
console.log(typeof [1,2,3])


