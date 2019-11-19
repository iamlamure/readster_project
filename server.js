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
var Products = require('./routes/Products')
var Blogview = require('./routes/BlogView')
var Bookshelf = require('./routes/Bookshelf')
var Admins = require('./routes/Admins')
var Carts = require('./routes/Carts')
var Payments = require('./routes/Payments')

app.use('/users', Users)
app.use('/blogs', Blogs)
app.use('/books', Books)
app.use('/products', Products)
app.use('/blogview', Blogview)
app.use('/bookshelf', Bookshelf)
app.use('/admins', Admins)
app.use('/carts', Carts)
app.use('/payments', Payments)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
