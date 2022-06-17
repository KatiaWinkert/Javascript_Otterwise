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

const ativiPromise = async () => {
  try {
    const respon = await b1()
    console.log(respon)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('End')
  }
}
ativiPromise()
