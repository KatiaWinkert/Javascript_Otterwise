const restObj = params => {
    const {name, ...rest } = params
    console.log(rest)
}
const obj = {
    name: 'katia', 
    idade: 33 , 
    profissão: 'dev'
}

restObj(obj) 

const arr = [1,2,3,4,5]
const [a,b, ...rest] = arr
console.log(rest)