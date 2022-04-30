const user = {
  nome: 'Katia',
  age: 33,
  list: [1, 2, 3],
  obj: {
    p1: 1,
    p2: 'oi',
  },
  'com hífem': 9,
}

let dic = {
  abacaxi: 1,
  alface: 2,
  maça: 3,
}
console.log(dic.abacaxi)

console.log(user['com hífem'])
console.log(user.obj.p1)
console.log(user)
user.age = 34
console.log(user)
console.log(user.nome)
console.log(user.list[0])
user.novo = 'nova prop'
console.log(user)
