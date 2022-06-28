import { soma } from './math.js'

export function formated(value) {
  value.clients.forEach((element) => {
    console.log(`Cliente: ${element.id} - ${element.name}`)
    let pur = value.purchases.filter((data) => data.client_id === element.id)
    let order = pur.sort((a, b) =>
      new Date(a.data) - new Date(b.data) ? -1 : a.total - b.total
    )
    order.forEach((ord) => {
      console.log(
        `Compra em ${ord.data} no total de R$ ${ord.total.toFixed(2)}`
      )
    })
    soma(pur)
  })
}
