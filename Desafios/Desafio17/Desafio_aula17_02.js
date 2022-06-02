const colaboradores = [
  { name: 'Juca', age: 25, office: 'Front-End' },
  { name: 'márcia', age: 23, office: 'Back-End' },
  { name: 'victoria', age: 28, office: 'Designer' },
  { name: 'Fernado', age: 19, office: 'Estagiario' },
  { name: 'Fabiane', age: 25, office: 'Back-End' },
  { name: 'Jessica', age: 23, office: 'Front-End' },
]
console.log('A): ----------------------------------------------------------')

  //a

  function ValuesUsers(data) {
    let allOcargo = data.map((data) => data.cargo)
    const repeatedValues = Object.values(allOcargo)
  
    let somaElementos = repeatedValues.reduce(function (object, item) {
      if (!object[item]) {
        object[item] = 1
      } else {
        object[item]++
      }
      return object
    }, {})
    return somaElementos
  }

  console.log('Exercicio A)')
  console.log(ValuesUsers(colaboradores))
  console.log("----------------------------------------------------------------")
  
  //b

  function age(data) {
    let decrescente = data.sort((a, b) => b.idade - a.idade)
    return decrescente
  }
  
  const peso = {
    estagiário: 1,
    'front-end': 2,
    'back-end': 3,
    designer: 4,
  }

  
  console.log('Exercicio B)')
  console.log(age(colaboradores))
  console.log("----------------------------------------------------------------")

  //c
  function Ordemlist(data) {
    const sort = data.sort((a, b) => {
      if (peso[a.cargo] < peso[b.cargo]) {
        return -1
      }
      if (peso[a.cargo] > peso[b.cargo]) {
        return 1
      }
      return 0
    })
    return sort
  }

  
  console.log('Exercicio C)')
  console.log(ValuesUsers(colaboradores))
  console.log("----------------------------------------------------------------")
  
  //d
  function imprime(data) {
    let order = data.sort((a, b) => {
      if (a.idade < b.idade) {
        return -1
      }
      if (a.idade < b.idade) {
        return 1
      }
  
      if (a.idade === b.idade) {
        Ordemlist(data)
      }
    })
  
    return order
  }

  
  console.log('Exercicio D)')
  console.log(imprime(colaboradores))
  console.log("----------------------------------------------------------------")