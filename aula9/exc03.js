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

const [p1] = projetos 
console.log(p1) 

const { name : nameprojetos } = p1 
console.log(nameprojetos)
