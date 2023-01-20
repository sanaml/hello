var HTTP_PORT = process.env.PORT || 8080
var express = require('express')
var app = express()
app.get('/', (req, res) => {
  res.send('Sanam Lakhotra 1234567890')
})
app.listen(HTTP_PORT)
