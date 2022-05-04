const user = {
  name: 'Marilia',
  age: 26,
  job: 'Dev',
}

const objkey = Object.entries(user)

for (let i = 0; i < objkey.length; i++) {
  console.log('o valor da propriedade', `${objkey[i].join(' é ')}`)
}

console.log('______________________________________________________')
// Atividade 2 
const users = [
  {
    name: 'Marília',
    age: 26,
    job: 'Dev',
  },
  {
    name: 'Juca',
    age: 21,
    job: 'RH',
  },
  {
    name: 'Flávia',
    age: 30,
    job: 'Financeiro',
  },
  {
    name: 'Sérgio',
    age: 24,
    job: 'Dev',
  },
]

const vet = []

for(let i = 0; i < users.length; i++){
  vet.push(
    `${users[i].name} ${users[i].job === 'Dev' ? 'é Dev' : 'Não é Dev.'}`
  )
}

console.log(vet.join(' '))

