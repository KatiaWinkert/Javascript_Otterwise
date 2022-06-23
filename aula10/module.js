/*function formatterCurrency (value) {
    return value.toFixed(2)
}

export default formatterCurrency*/ // <= essa é uma opção de exportar modulo quando se tem 1 função

export function formatterCurrency(value) {
  return value.toFixed(2)
}

export const formatteOp = (value) => {
  return value.toFixed(3)
}

export const name = 'katia'
