const p1 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve('sucesso')
  }, 2000)
})
// ---------- Barreira de sincronia. 
p1.then(resp => {
  console.log(resp)
}).then (()=> {
  console.log('final')
})

// o then pode encadear metodos pode ter um then dentro de outro then. 
// toda vez que for colocado reject no escopo la em cima vai dar Erro!!. 
// resolve vai dar a resposta possitiva.
// o then ali esta servindo para o processo assincrono assim quando solicitado a impressao nao dara pendente.
// se não tiver o .then nao tera uma barreira asincrona.