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
      reject('Resolve p2')
    }, 1000)
  })

const p3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Rejeita p3')
    }, 3000)
  }).then((resp) => {
    console.log('then: ', resp)
  })

async function execPromise() {
  const resp = await p1()
  console.log(resp)
  console.log('final')
}

execPromise()
// voce pode tb ter uma função anonima assincrona ( const execpromise = async function(){ ... }) que vai funcionar
// E você pode ter uma aerron function assincrona (const execpromise = async ()  => { ... }) que vai funcionar)


/*  .catch((error) => {
    console.log('Catch: ', error)
  })
  .finally(() => {
    console.log('Final')
  })*/
