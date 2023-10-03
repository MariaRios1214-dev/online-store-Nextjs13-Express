export const fetchItemDetail = async (id) => {
  return fetch(`http://localhost:8080/api/items/${id}`, { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => { throw new Error() })
}
export const fetchDescription = async (id) => {
  return fetch('https://api.mercadolibre.com/items/MLA935110000/description', { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => { throw new Error() })
}
