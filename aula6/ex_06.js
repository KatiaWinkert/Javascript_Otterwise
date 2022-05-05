// Exercicio 1 

const imprime = (() => {
    console.log('Esta impresso!')
})()

// Exercicio 2. 

const executeOnArray = function (a , func) {
    for(let i = 0; i < a.length; i++){
        console.log(func(a[i]))
    }
}

const double = (arg) => arg * 8 

executeOnArray([1,2,3,4,5], double)