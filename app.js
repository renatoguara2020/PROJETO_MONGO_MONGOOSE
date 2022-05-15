const express = require('express')
const conn = require('./database/conn')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`<h1>Hello World com Mongoose na Porta: ${port}</h1>`)
})

console.log(conn);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})