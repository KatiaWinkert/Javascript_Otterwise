function mult(a) {
  return (b) => a * b
}

console.log(mult(3)(10)) // b => 3 * b -> 2 = 3 * 2 = 6

/* HOF - High-Oder Function 
é uma função que manipula outras, seja recebendo uma função como argumento ou retornando uma ex: 
    function aplica (func, value) {
        return func (value) >>> a função aplica esta usando o func depois do return entao é um callback function 
    }


                        
*/
