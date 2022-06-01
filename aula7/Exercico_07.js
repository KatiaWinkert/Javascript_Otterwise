const colaboradores = [ 
    {name: 'Juca', age: 25, office: 'Front-End'},
    {name: 'márcia', age: 23, office: 'Back-End'}, 
    {name: 'victoria', age: 28, office:'Designer' }, 
    {name: 'Fernado', age: 19, office:'Estagiario'}, 
    {name: 'Fabiane', age: 25, office: 'Back-End'}, 
    {name: 'Jessica', age: 23, office: 'Front-End'}
]
console.log('----------------------------------------------------------')
console.log('a):Crie e imprima no console um array somente com os nomes:')

const cindy = colaboradores.map(elem => {
    return elem.name
})
console.log('Os nomes são:', cindy) 

console.log('----------------------------------------------------------')
console.log('b):Crie e imprima no console os colaboradores que são front-end,') 
const officeFrontend = colaboradores.filter(elemone => {
    return elemone.office === 'Front-End'
})
console.log ('Os colaboradores são:', officeFrontend)

console.log('----------------------------------------------------------')
console.log('c):Imprima no console o colaborador maior de 23 anos,')

 

const primola = colaboradores.find(elem => {
    return elem.age > 23
})
console.log('O colaborador maior de 23 anos é: ',primola)

console.log('----------------------------------------------------------')
console.log(
  'd):Imprima no console todos os colaboradores do array maior de 18 anos:')

// Imprima no console todos os colaboradores do array maior de 18 anos: 

const maiorIdade = colaboradores.filter(elem => {
    return elem.age > 18
})
console.log('Os colaboradores que tem idade maior de 18 anos são:', maiorIdade)


console.log('----------------------------------------------------------')
console.log('E): Imprima no console se existe algum colagorador estagiario.')

const estagioTandf = colaboradores.find(elem => {
    return elem.office === 'Estagiario'
})
console.log('O colaborador estagiario é: ',estagioTandf)
console.log('----------------------------------------------------------')
console.log('F): Imprima no console a soma da idade de todos os colaboradores:')

const Somaidade = colaboradores.map (elem => {
    return elem + age
})
console.log(Somaidade)
