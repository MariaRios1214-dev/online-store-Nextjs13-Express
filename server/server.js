const express = require('express')
const { fetchItemDetail, fetchDescription, fetchSearchItems } = require('./api/items')
const { itemDetail } = require('./model/items')

const app = express()
const PORT = 8080
console.log('ssssssssssssssss', PORT)
app.get('/api/items/q', (req, res) => {
  console.log('ddd', req.query)
  res.json({ message: 'hola' })
})


app.get('/api/items/:id', async (req, res) => {
  const { id } = req.params
  const itemDetailById = await fetchItemDetail(id)
  const itemDescriptionById = await fetchDescription(id)

  itemDetail.item.id = itemDetailById.id
  itemDetail.item.title = itemDetailById.title
  itemDetail.item.price = itemDetailById.price
  itemDetail.item.picture = itemDetailById.pictures[0].url
  itemDetail.item.condition = itemDetailById.condition
  itemDetail.item.free_shipping = itemDetailById.shipping.free_shipping
  itemDetail.item.sold_quantity = itemDetailById.sold_quantity
  itemDetail.item.description = itemDescriptionById.plain_text

  console.log('itemDetail', itemDetail)

  res.json(itemDetail)
})


app.get('/api/items', async (req, res) => {
  const { search } = req.query
  console.log('dsssdd', await fetchSearchItems(search))
  console.log('search', search)

})

app.listen(PORT, () => {
  console.log(`Server start  to port aaa${PORT}`)
}
)
