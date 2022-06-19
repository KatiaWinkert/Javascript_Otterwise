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

const {
  projects: [{ name: nameprojetos }],
} = user 

console.log(nameprojetos)
