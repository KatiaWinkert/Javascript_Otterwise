const array = [ 1, 2, 3, 4, 5] // map ele percorreo todo o arrei e da o retorno pedido no return seja expressão ou string 

const mapArray = array.map(elem => {
    return elem *10
})

console.log(mapArray)

const reais = array.map(conj =>{
    return `R$ ${conj.toFixed(2)}`
})

console.log(reais)