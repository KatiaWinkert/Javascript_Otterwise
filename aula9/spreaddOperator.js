//Spread Operator => usado em um objeto "espalha" as propriedades desse objeto. 
const obj = {
    name: "katia" , idade: 33, linguagem: 'Javascript'
}

const newObj = {
    ...obj,
    profissao: 'dev',
    linguagem: 'JS' 

}

console.log(newObj)

console.log("---------------------------------------------")

const a = {
    name: 'Erico',
    age: 33, 
}

const objcopia = {
    ...obj, 
}

a.linguagem = 'Python'
console.log(a)

console.log(objcopia)