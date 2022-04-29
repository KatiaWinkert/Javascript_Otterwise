/* operadores de comparação são:
 * igua(==) e estritamente igual (===) - quando se fala de estritamente igual estamos comparando o valor e o tipo (seu valor e se é number ou string )
 * Diferente (!=) e estritamente diferente (!==)
 * Menor (<) e menor igual (<=)
 * Maior (>) e maior igual (>=) */
//___________________________________Pratica a baixo:

const value = 5
if (value !== 10) {
  console.log('Condição é true')
  if (value === 5) {
    console.log('condição 2 tambem é verdadeira!')
  }
}
console.log(value)
//_______________________________________

const valu = 3
if (valu <= 10) {
  console.log('Condição é true')
  if (valu >= 5) {
    console.log('condição 2 tambem é verdadeira!')
  } else {
      console.log('é falso!')
  }
}
console.log(valu)