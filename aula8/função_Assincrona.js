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

const execPromise = async () => {
  try {
    const resp = await p3()
    console.log('try: ', resp)
  } catch (error) {
    console.log('catch: ', error)
  } finally {
    console.log('Final')
  }
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
