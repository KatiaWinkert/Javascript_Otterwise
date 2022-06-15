 const  installments =  [
    {  parcela_number : 1 ,  value: 123.45,  status : 'Pago'  } ,
    {  parcela_number : 2 ,  value: 139.88,  status : 'Pago'  } ,
    {  parcela_number : 3 ,  value: 123.45,  status : 'Pago'  } ,
    {  parcela_number : 4 ,  value: 182.37,  status : 'Aberto'  } ,
    {  parcela_number : 5 ,  value: 133.93,  status : 'Aberto'  } ,
  ]

  function totalValor (date) {
      const sum = date.reduce((acc, elem) => {
          return acc + elem.value
      }, 0)
      return sum.toFixed(2)
  }

  console.log('Atividade A):')
  console.log(totalValor(installments))
  console.log('----------------------------------')

  function valorImpreso(c){
    const press = c.reduce (( acc, elem ) => {
        if (elem.status === 'Pago') {
            acc.total_pago = acc.Pago+ elem.value
        } else {
            acc.total_aberto = acc.Aberto + elem.value
        }
        return acc
    },  
    {
        total_pago: 0, 
        total_aberto : 0,
    })
    return press
  }

  console.log('Exercicio B')
  console.log(valorImpreso(installments))
  console.log('------------------------------')
  
  