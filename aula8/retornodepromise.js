const value = 10

const p1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof value !== 'number') {
        reject('Argumento não é um numero!')
      }
      resolve(value * 10)
    }, 2000)
  })

const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve p2')
    }, 1000)
  })

const p3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Rejeita p3')
    }, 3000)
  })

Promise.all([p1(), p2(), p3()])
  .then((resp) => {
    console.log(resp)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('Final')
  })
