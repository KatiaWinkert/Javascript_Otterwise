 const  installments =  [
    {  parcela_number : 1 ,  valor: 123.45,  status : 'Pago'  } ,
    {  parcela_number : 2 ,  valor: 139.88,  status : 'Pago'  } ,
    {  parcela_number : 3 ,  valor: 123.45,  status : 'Pago'  } ,
    {  parcela_number : 4 ,  valor: 182.37,  status : 'Aberto'  } ,
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
  
  