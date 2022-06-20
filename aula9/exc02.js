// Destructuring Assignment - object
const user = {
  nome: 'Katia',
  idade: 33,
  project: {
    name: 'Projecto'
  }
}
console.log(user)
//const { nome, idade } = user

//const {project: Projecto } = user
//const {name} = project 

const {
  project: {name: nomedoprojecto }, 
} = user 

console .log(nomedoprojecto)


// let name = user.nome
// let age = user['idade']
// na Desistruturação o nome da variavel pode ser igual o nome da propriedade.
