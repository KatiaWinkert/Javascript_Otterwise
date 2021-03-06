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
            acc.total_pago = acc.total_pago + elem.value
        } else {
            acc.total_aberto = acc.total_aberto + elem.value
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

 function listOrdenada (a) {
    let listdeCrecent = a.sort((a,b) => a.value - b.value )
    return listdeCrecent
 }

 console.log('Exercicio C')
 console.log(listOrdenada(installments))
 console.log('-----------------------------')





  
  function order (dado) {
    const orderDecre = dado.sort((b,c) => {
        if(b.value < c.value) {
            return -1
        } if (b.value > c.value ){
            return 1 
        }
    
        if (b.value === c.value) {
            return b.parcela_number > c.parcela_number 
            -1
        } else { 
            return b.parcela_number < c.parcela_number 
            1
            
        }


    },0)
    return orderDecre
  } 

  console.log('Exercicio D')
  console.log(order(installments))
console.log('--------------------------------')