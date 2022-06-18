// Destructuring Assignment - object
const user = {
  nome: 'Katia',
  idade: 33,
  project: {
    name: 'Projecto 1'
  }
}

const { nome, idade } = user

const {project: Projecto} = user
const [name] = project 

console.log()
console.log(nome, idade)

// let name = user.nome
// let age = user['idade']
// na Desistruturação o nome da variavel pode ser igual o nome da propriedade.
