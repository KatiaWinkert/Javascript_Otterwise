/// classes dos objetos 

const objUser = {

    name:'katia',
    age: 33,
    job: "Dev", 
}

const objAdrres = {
    street: 'Rua 1',
    number: '101',
}

console.log(Object.assign(objUser, objAdrres, {bank: 0001}))
console.log(objUser)
console.log(objAdrres)

console.log('____________________________________________________')
const objKeys = Object.keys(objUser) // .keys passa informação das propriedades do objeto 
console.log(objKeys)
for(let i= 0; i < objKeys.length; i++ ){
    console.log(objKeys[i])
}

console.log('____________________________________________________')
const objValue = Object.values(objUser) // .Values vai passar a informação dos valores do objeto
console.log(objValue)
for(let i= 0; i < objValue.length; i++ ){
    console.log(objValue[i])
}

console.log('____________________________________________________')
const objEntries = Object.entries(objUser) // ele gera um array do array - onde ele gera na posição 0 a propridade e na posição 1 o valor da propriedade. 
console.log(objEntries)
for (let i = 0; i < objEntries.length; i++) {
 console.log('prop:', objEntries[i][0])
 console.log('value:', objEntries[i][1] )
} 

