const { default: Error } = require("next/error")

const fetchSearchItems = async (search) => {
  return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
    .then(res => res.json())
    .catch(() => { throw new Error("Failed request") })
}
const fetchItemDetail = async (id) => {
  return fetch(`https://api.mercadolibre.com/items/${id}`)
    .then(res => res.json())
    .catch(() => { throw new Error("Failed request") })
}

const fetchItemDescription = async (id) => {
  return fetch(`https://api.mercadolibre.com/items/${id}/description`)
    .then(res => res.json())
    .catch(() => { throw new Error("Failed request") })
}
module.exports={fetchItemDetail,fetchItemDescription, fetchSearchItems}