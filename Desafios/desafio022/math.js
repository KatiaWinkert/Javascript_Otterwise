export function soma(value) {
  let total = value.reduce((acc, data) => acc + data.total, 0)
  console.log('Total do cliente: R$', total.toFixed(2))
}
