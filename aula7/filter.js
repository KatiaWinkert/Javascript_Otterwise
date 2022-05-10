const array = [1 , -2, 3, -42, 50]

const filterArray = array.filter(elem => {
     return elem < 0
    })
    console.log(filterArray)

    console.log('____________________________________')

const nino = [{name: 'katia', age: 33}, {name: 'Juca', age: 21}, { name:'Douglas', age: 35, }]

const cindy = nino.filter( elem => {
    return elem.age < 25 
})

console.log(nino)
console.log(cindy)