const author = {
  "name": 'Fernanda',
  "lastname": 'Rios'
}

const address = {
  "cityName": String,
  "state": String
}


const itemProps = {
  "id": String,
  "title": String,
  "price": Number,
  "picture": String,
  "condition": String,
  "freeShipping": Boolean,
  "soldQuantity": Number,
  "description": String,
  "address":address
}

module.exports = { author, itemProps }