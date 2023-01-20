/*********************************************************************************
 * WEB322 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: sanam lakhotra Student ID: 151835212 Date: 2023/01/19
 *
 * Online (Cyclic) URL: https://wide-eyed-blue-tick.cyclic.app/_
 *
 ********************************************************************************/
var HTTP_PORT = process.env.PORT || 8080
var express = require('express')
var app = express()
app.get('/', (req, res) => {
  res.send('Sanam Lakhotra 151835212')
})
app.listen(HTTP_PORT)
