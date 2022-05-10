const array = [ 1, -2, 3, -42, 50 ]

const  neverLand = array.every(elem => {
    return elem < 0
})

console.log(neverLand)

console.log('__________________________')

const bebe = [{nome: 'katia', age: 33}, { nome:'Daiane', age: 21}, { nome: 'Pamela', age: 25}]

const bebeNino = bebe.every( elem => elem.age > 15) 

console.log(bebeNino)