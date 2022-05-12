const array = [ 1, -2 ,3 ,-42 ,50 ]

const elemSorts = array.sort((a , b) => {
    if (a - b < 0) return -1 
    if (a - b > 0) return 1
    return 0
})

console.log(elemSorts)
console.log(array)


console.log('__________________________________________')

const nino = [-42, -100, -8.5, 20, 200 , 20 ]
console.log(nino)

const arrayNum = nino.sort((a,b) => {
    return a - b  
})
console.log(arrayNum)

// a = 20 
// b = 200 
// a = -42 / b = -100 -> + positivo  // -42 - (-100) = 58  - 58 é um numero positivo 
// a = 20 / b = 200 -> - negativo  // 20 - 200 = - 180  é negativo
// a = 20 / b = 20 -> 0  // 20 -20 = 0 
// a = -42 / b = 20 -> - negativo // - 42 - 20 = -62 negativo  
               // quando vc inverte  o sinal após o return na condição ele faz a impressao de forma decrescente
 

