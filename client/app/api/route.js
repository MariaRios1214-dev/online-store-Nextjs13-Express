export const fetchApiItems = async (query) => {
  const response = await fetch(`http://localhost:8080/api/items?q=${query}`, { cache: 'no-store' })
  return response.json()
}

export const getListItems = async (search) =>
  new Promise((resolve, reject) => {
    fetchApiItems(search)
      .then(({ items }) => {
        return resolve(items)
      })
      .catch((error) => {
        reject( new Error('Failed to fetch data'))
      })
  })
