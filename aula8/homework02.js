//2. Crie uma função assincrona que realiza um Promisse.all entre as 3 Promise criadas no exercicio 01, essas funçoes deve possuir tratamento de erros.

const valor = 10
const numero = 20

const a1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof valor !== 'number') {
        reject('Resultado Não é um numero!!')
      }
      resolve(valor * 10)
    }, 2000)
  })

const b1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof numero !== 'number') {
        reject('Resultado não é um numero!!')
      }
      resolve(numero * 20)
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
