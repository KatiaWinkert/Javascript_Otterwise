const array = [ 1, 2, 3, 4, 5]

const mapArray = array.map(elem => {
    return elem *10
})

console.log(mapArray)

const reais = array.map(conj =>{
    return `R$ ${conj.toFixed(2)}`
})

console.log(reais)