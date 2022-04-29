//escopo global de arquivo
let x = 99

function somaDoisNumeros(a, b) {
  // escopo da função somaDoisNumeros
  let x = 123
  console.log(x)
  return a + b + 10
}


console.log(somaDoisNumeros(1, 3))
console.log(x)
/* escopo interno ele funciona somente com o que é difinifo internamente,
 por exemplo: o espaço dente as chaves do function somaDoisNumeros o que for 
 criado ali dentro explo variavel ´s ira funcionar dentro daquela function, e pq nao fora?
 pq nao foi declarado fora e sim somente dentro da function. Agora o que é declarado no escopo global
 se for chamado dentro da function o console consegue imprir ele tranquilamente*/
