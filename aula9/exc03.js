// Destructuring Assignment - object
const user = {
  nome: 'Katia',
  idade: 33,
  projects: [
    {
      name: 'Projecto 1',
    },
    {
        name: 'Projeto 2'
    },

  ],
}

const { projects : projetos} = user 
console.log(projetos)

const p = [ {name: 'projeto 1'}, { name: 'projeto 2'}]
const [p1, p2] = p
console.log(p1) 