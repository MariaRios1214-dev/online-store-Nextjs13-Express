const express = require('express')

const app = express()
const PORT = process.env.PORT
console.log('ssssssssssssssss', PORT)
app.get('/api/items', (req, res) => {
  console.log('ddd', req.query)
  res.json({ message: 'hola' })
})

app.listen(PORT, () => {
  console.log(`Server start  to port aaa${PORT}`)
}
)
