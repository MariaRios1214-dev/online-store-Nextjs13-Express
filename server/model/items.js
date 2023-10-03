const author = {
  "name": 'Fernanda Rios',
  "lastname": 'Rios'
}
const itemDetail = {
  "author": author,
  "item": {
  "id": String,
  "title": String,
  "price": Number,
  "picture": String,
  "condition": String,
  "free_shipping": Boolean,
  "sold_quantity": Number,
  "description": String,
  }
}

module.exports={itemDetail}