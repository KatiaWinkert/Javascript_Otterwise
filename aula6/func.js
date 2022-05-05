const soma = (firstNum, secondNum) => firstNum + secondNum

const obj = {
  name: 'test',
  func: soma, // (firstNum, secondNum) => firstNum + secondNum,
}

console.log(obj.func(5, 8))

// a declaração da arrow function pode ser colocado como valor  tambem dentro do objetos

const somaUm = (firstNum, secondNum) => firstNum * secondNum

const funCarray = [somaUm] 

console.log(funCarray[0](5,8))