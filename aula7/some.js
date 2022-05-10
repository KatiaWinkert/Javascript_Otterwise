const array = [1,-2,3,-42,50]

const SomArray = array.some(elem => {
    return elem < 0
})

console.log(SomArray)
console.log("_____________________________")

const nino = [
  { name: 'katia', age: 33 },
  { name: 'Juca', age: 21 },
  { name: 'Douglas', age: 35 },
]

const cindy = nino.find((elem) => {
  return elem.age < 25
})

console.log(nino)
console.log(cindy)

const verdadeoufalso = nino.some(elem1 => elem1.age < 25)

console.log(verdadeoufalso)