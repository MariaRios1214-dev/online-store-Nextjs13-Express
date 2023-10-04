export const fetchItemDetail = async (id) => {
  return fetch(`http://localhost:8080/api/items/${id}`, { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => { throw new Error() })
}
