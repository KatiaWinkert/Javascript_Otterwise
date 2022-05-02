const str = 'otterwise'

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str)

console.log(str.slice(5))
console.log(str.replace('t', subst))

function subst(v) {
  console.log(v)
  return v.toUpperCase()
}

