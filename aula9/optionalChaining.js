// Optional Chaining => Evita que dispare um erro de acesso a uma propriedade de um objeto com valor null ou undefined.
//forma exuta de tratar e garantir que o codigo não irá quebrar. 
//feature "recente".  
// essa aplicação pode substituir o If 

/*const obj = {
    name: 'Jheyni',
    idade: 3, 
    project: {
        name: 'Projeto 1', 
    }
}*/
const obj = null

console.log(obj?.project?.name)

console.log('final')