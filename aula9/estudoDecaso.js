// Estudo de caso=> Muito comum no dia a dia de um(a) dev: 
// "TypeError : Cannot read property [prop_name] of undfined"
// "TypeError : Cannot read property [prop_name] of null" 
//Ocorre quando manipulamos objetos. 
// Estamos tentando acessar uma propriedade mas o "dono" da propriedade não existe (undefined ou null). 
/*const a = {
  name: 'Erico',
  age: 33,
  project: null
//project: {
  //  name: 'Project 1', 

}*/
const a = {}

if (a && a.project){
    console.log(a.project.name)
}
console.log("final")