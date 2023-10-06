export const port = process.env.PORT_SERVICE

export const getItemDetail = async (id) => {
  return await fetch(`${port}/api/items/${id}`, { cache: 'no-store' })
    .then(detail => detail.json())
    .catch(() => {
      throw new Error('Failed to fetch data')
    })
}
