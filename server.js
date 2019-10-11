var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var path = require('path')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')
var Blogs = require('./routes/Blogs')
var Books = require('./routes/Books')

app.use('/users', Users)
app.use('/blogs', Blogs)
app.use('/books', Books)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
