const value = 10

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof value === 'number') {
      reject('Argumento não é um numero!')
    }
    resolve(value * 10)
  }, 2000)
})

p1.then((resp) => {
  console.log(resp)
})
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('Final')
  })

// metodo catch ele é usado para quando se tem o reject assim como o .then é usado quando se te o resolve.
//finally executa o final
