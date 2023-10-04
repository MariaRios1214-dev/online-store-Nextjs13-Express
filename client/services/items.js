export const fetchItemDetail = async (id) => {
  return fetch(`http://localhost:8080/api/items/${id}`, { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => {
      throw new Error('Failed to fetch data')
    })
}
export const getListItems = async (query) => {
  return fetch(`http://localhost:8080/api/items?q=${query}`, { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => {
      throw new Error('Failed to fetch data')
    })
}
