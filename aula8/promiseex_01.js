const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('sucesso')
  }, 2000)
})
// ---------- Barreira de sincronia.
p1.then((resp) => {
  console.log(resp)
  return 'terminou'
}).then((resp) => {
  console.log(resp)
})

console.log('Final')

// o then pode encadear metodos pode ter um then dentro de outro then.
// toda vez que for colocado reject no escopo la em cima vai dar Erro!!.
// resolve vai dar a resposta possitiva.
// o then ali esta servindo para o processo assincrono assim quando solicitado a impressao nao dara pendente.
// se não tiver o .then nao tera uma barreira asincrona.
//dentro do bloco do .then pode se ter return.
