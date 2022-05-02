//1 - Construa um objeto chamado myUser que possui as propriedades: name, age, e email. coloque valores da sua escolha nessas propriedades e imprima no console.

const myUser = {
  name: 'Katia Winkert',
  age: 33,
  'e-mail': 'kwinkert.engthesoftware@gmail.com',
}
console.log(myUser)

//2 - Dado Array ['a', 'b', 'c', 'd'] imprima no sonsole o valor do terceiro elemento.
const array = ['a', 'b', 'c', 'd']
console.log(array[3])

//3- Dado o objeto dec{nome:Juca, project:[{name:'Projeto1', start:'01/02/2022},{name:'Projeto2', start:'03/02/2022}]}, imprima no console:
// a. O nome do dev
//b. O segudo projeto.
//c o nome do primeiro projeto.
const dev = {
  name: 'Juca',
  projects: [
    { name: 'project 1', start: '01/02/2022' },
    {
      name: 'project 2',
      start: '03/02/2022',
    },
  ],
}
console.log(dev.name)
console.log(dev.projects[1].name)
console.log(dev.projects[0].name)

//4 - Percorra o array [1,-22,3,4,-5] e motifique os valores, multiplicando cada um por 10.

const multp = [1,-22,3,4,-5]

for (let i = 0 ; i < 4; i++){
    multp[i] = multp[i]*10
}
console.log(multp)