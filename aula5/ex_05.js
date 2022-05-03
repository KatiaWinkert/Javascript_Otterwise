const user = {
  name: 'Marilia',
  age: 26,
  job: 'Dev',
}

const objkey = Object.entries(user)

for (let i = 0; i < objkey.length; i++) {
  console.log('o valor da propriedade', `${objkey[i].join(' é ')}`)
}
