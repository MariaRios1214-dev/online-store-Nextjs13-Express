const fetchSearchItems = async (id) => {
  return fetch('https://api.mercadolibre.com/sites/MLA/search?q=apple', { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => { throw new Error() })
}
const fetchItemDetail = async (id) => {
  return fetch('https://api.mercadolibre.com/items/MLA632938595', { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => { throw new Error() })
}

const fetchDescription = async (id) => {
  return fetch('https://api.mercadolibre.com/items/MLA935110000/description', { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => { throw new Error() })
}
module.exports={fetchItemDetail,fetchDescription, fetchSearchItems}