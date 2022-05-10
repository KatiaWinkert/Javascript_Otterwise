const array = [ 1, -2 ,3 ,-42 ,50 ]

const elemSorts = array.sort((a , b) => {
    if (a - b < 0) return -1 
    if (a - b > 0) return 1
    return 0
})

console.log(elemSorts)
console.log(array)


console.log('__________________________________________')

const nino = [-42, -100, -8.5, 20, 200 , 65.65 ]
console.log(nino)

const arrayNum = nino.sort((a,b) => {
    if (a < b ) return 1123               // quando vc inverte  o sinal após o return na condição ele faz a impressao de forma decrescente 
    if (a > b) return -100.23
    if (a === b) return 0
})

console.log(arrayNum)