const str = 'Otterwise'

const resp = str.replace('w', ' W').toUpperCase()

/* passo a passo do encadeamento 
1 - str.replace('w', ' W').toUpperCase() - primeiro o str vai achar o seu valor string (Otterwise)
2- str.replace('w', ' W').toUpperCase() - segundo o replace vai substituir o w minus pelo maiuscu e dar espaco ('w', ' W') Otter Wise
3- str.replace('w', ' W').toUpperCase() - terceiro o .ToUpperCase vai colocar as letras em maiuscula. */

console.log(resp)
