// Exercicio 1 

const imprime = (() => {
    console.log('Esta impresso!')
})()

// Exercicio 2. 
console.log('___________________________________________')

const executeOnArray = function (a , func) {
    for(let i = 0; i < a.length; i++){
        console.log(func(a[i]))
    }
}

const double = (arg) => arg * 8 

executeOnArray([1,2,3,4,5], double)

// exercico 3 
console.log('___________________________________________')
const op = {
    soma : (numOne, numTwo) => numOne + numTwo, 
    subtrair : (numOne, numTwo) => numOne - numTwo,
    multipllicação : (numOne, numTwo) => numOne * numTwo, 
    Divisão : (numOne, numTwo) => numOne / numTwo,
}

const calculate = (arg) => {
    return (numOne, numTwo) => op [arg](numOne,numTwo)
}

console.log(calculate('soma')(3,15))
console.log(calculate('subtrair')(3,5))
console.log(calculate('multipllicação')(5,-8))
console.log(calculate('Divisão')(10,5))

