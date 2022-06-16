const value = 10

function p1() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (typeof value === 'number') {
        reject('Argumento não é um numero!')
      }
      resolve(value * 10)
    }, 2000)
  })
}
/*const p1 = new Promise((resolve, reject) => {
  setInterval(() => {
    if (typeof value === 'number') {
      reject('Argumento não é um numero!')
    }
    resolve(value * 10)
  }, 2000)
})*/

p1().then((resp) => {
  console.log(resp)
})
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('Final')
  })
