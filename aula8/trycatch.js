function formatCurrency(value) {
  try {
    console.log('inicio try')
    const resp = value.toFixed(2)
    console.log('antes do return ')
    return resp
  } catch (e) {
    return '0.00'
  } finally {
    console.log('final')
  }
}
console.log(formatCurrency('10'))

/*function formatCurrency(value) {
  try {
    return value.toFixed(2)
  } catch (e) {
    //console.log(e.message) // => o atibuto 'message' é de uma classe de erro o que ele faz: so nos da uma mensagem de erro mas nao imprime todo o erro então não fica tão poluido
    return '0.00'
  } finally {
    console.log('final')
  }
}
console.log(formatCurrency('10')) // esse argumento deve ser um number*/

// try e catch pode ser adicionado no nossos codigo para tratamento de erro.
