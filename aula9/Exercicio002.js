const students = [
  { id: 1, name: 'Jhon Doe', age: 23, scholarship: false },
  { id: 2, name: 'Margo Hose', age: 19, scholarship: true },
  { id: 3, name: 'Kayle', age: 22, scholarship: true },
]
const [primeiro, { name }, terceiro] = students
// Ex. 1
console.log(primeiro)
//ex2.
console.log(terceiro)
//ex3
console.log(name)

//B
const pil = (...rest) => console.log(...rest)
pil([1,2,3,4], "katia", "Nino Nenê", true === true)
//c
