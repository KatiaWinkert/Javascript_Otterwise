const user = {
  nome: 'Cindy',
  idade: 3,
  endereco: {
    rua: 'Rua Central',
    numero: 135,
  },
  projetos: ['Projeto 1', 'Projeto 2'],
}

const {nome, endereco: {rua}, projetos, projetos: [,projetos2] } = user  
//a 
console.log(nome)
//B
console.log(rua)
//c
console.log(projetos)
//c 
console.log(projetos2)