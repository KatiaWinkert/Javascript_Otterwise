let orderuser = [
  {
    nome: 'juca',
    idade: 25,
    cargo: 'front-end',
  },
  {
    nome: 'marcia',
    idade: 23,
    cargo: 'back-end',
  },
  {
    nome: 'victoria',
    idade: 28,
    Cargo: 'designer',
  },
]

orderuser.sort(function (a, b) {
  if (a.idade < b.idade) {
    return -1
  } else {
    return true
  }
})

console.log(orderuser)
