const array = [1, 2, 3, 2, 5]

const sum = array.reduce((acc, elem) => {
  return acc + elem
}, 0)

console.log(sum)

/* acc é obrigatorio ele ira guardar na memoria o valor percorrido do array para poder fazer a expressao, por exemplo 
o numero 0 no final colocado é o valor do acc e o elem é os numeros que estão no array, entao sera 
0 + 1 = 1 ..... esse um sera o novo valor do acc então sera 1 - 2 = 3 que sera o novo e assim por diante ate chegar 
no resultado final. */

const arrayline = [ -42 , -100 , -8.5, 20 , 200 , 20 ]


const funnyArray = arrayline.reduce((acc, elem) => {
    console.log('acc:' , acc, 'elem:', elem)
   return acc + elem
},0)

console.log(funnyArray)
