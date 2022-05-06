const array = [1, -2, 3, -42, 50] // Find vai procurar o primeiro elemento do array que seja true 
// no caso do primeiro exemplo o valor do elemento menor que 0 mais proximo é -2
const findElement = array.find((elem) => {
  return elem < 0
})

console.log(findElement)


const cadastro = [{name:' Katia', age: 33}, {name: 'Amanda', age: 25}]

let ctt = cadastro.find(elem =>{
    return elem.name === 'Julio'
})

if (!ctt){
    console.log('Não encontrei o elemento!')
    // Tratamento caso nao encontre o elemento ! ele da essa resposta e retorna underfined.
ctt = { name: "Default user"}
}


console.log(ctt)