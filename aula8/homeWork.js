// Exercicio 1. Crie 3 Promise usando setTimeout:
const valor = 5
const numero = 10

const a1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof valor !== 'number') {
        reject('Resultado Não é um numero!!')
      }
      resolve(valor * 5)
    }, 2000)
  })

const b1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof numero !== 'number') {
        reject('Resultado não é um numero!!')
      }
      resolve(numero * 10)
    }, 1000)
  })

const c1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Rejeitado c1')
    }, 3000)
  })

Promise.all([a1(), b1(), c1()])
  .then((tempo) => {
    console.log(tempo)
  })
  .catch((Erro) => {
    console.log(Erro)
  })
  .finally(() => {
    console.log('Final')
  })
