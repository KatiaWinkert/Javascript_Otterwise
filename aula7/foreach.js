const array = [10,20,30,40,50]

//for(let i = 0; i < array.length; i++ ){
//    console.log(array[i])
//}

/*array.forEach (function  imprime (value) { 1° exemplo 
  console.log(value)
})*/

/*array.forEach(function (value ){    (função anonima > sem o nome ) 2° exemplo
    console.log(value)
})*/

/*array.forEach(value => {    // arrow function  3° Exemplo 
  console.log(value)
})*/ 

array.forEach ((value , i,) => console.log(`${i}: ${value}`)) // sem o retorno  4° Exemplo: 
