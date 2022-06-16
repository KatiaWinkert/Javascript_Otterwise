const p1 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve('sucesso')
  }, 2000)
})

p1.then(resp => {
  console.log(resp)
})