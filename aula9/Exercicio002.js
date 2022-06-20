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
pil([1, 2, 3, 4], 'katia', 'Nino Nenê', true === true)
//c
const user = {
  nome: 'Cindy',
  idade: 3,
  endereco: {
    rua: 'Rua Central',
    numero: 135,
  },
  projetos: ['Projeto 1', 'Projeto 2'],
}
const getname = ({ nome }) => console.log(nome)
getname(user)

// D
const obj1 = {
  nome: 'nino',
}
const obj2 = {
  sobrenome: 'Winkert',
}
const groupobj = (obj1, obj2) => ({ ...obj1, ...obj2 })
console.log(groupobj(obj1, obj2))

//E.
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const up = (arra1, arra2) => [...arra1, ...arra2]
console.log(up(array1, array2))
