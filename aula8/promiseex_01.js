const p1 = new Promise ((resolve, reject) => {
    resolve('sucesso')
})

console.log(p1)

setInterval(() => {
    console.log('hello world')
}, 10 )