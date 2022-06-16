const p1 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve('sucesso')
  }, 2000)
})

console.log(p1)