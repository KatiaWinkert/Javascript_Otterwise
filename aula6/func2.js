function mult(a) {
  return (b) => a * b
}

console.log(mult(3)(10)) // b => 3 * b -> 2 = 3 * 2 = 6
