const { default: Error } = require("next/error")

const fetchSearchItems = async (search) => {
  return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`, { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => { throw new Error() })
}
const fetchItemDetail = async (id) => {
  return fetch(`https://api.mercadolibre.com/items/${id}`, { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => { throw new Error() })
}

const fetchItemDescription = async (id) => {
  return fetch(`https://api.mercadolibre.com/items/${id}/description`, { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => { throw new Error() })
}
module.exports={fetchItemDetail,fetchItemDescription, fetchSearchItems}