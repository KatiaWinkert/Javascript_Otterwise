const users = [
  { name: 'Marilia', age: 26, job: 'Dev' },
  { name: 'Juca', age: 21, job: 'RH' },
  { name: 'Flavia', age: 30, job: 'Financeiro' },
  { name: 'Sérgio', age: 24, job: ' Dev' },
]

const getColorByjob = (user) => {
  switch (user.job) {
    case 'Dev':
      return 'Blue'
    case 'RH':
      return 'Yellow'
    case 'Financeiro':
      return 'Red'
  }
}
console.log(getColorByjob(users[2]))


const colorByJob = {
  Dev: 'Blue',
  RH: 'Yellow',
  Financeiro: 'Red',
}

console.log(colorByJob[users[2].job])


