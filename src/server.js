const express = require('express')
const { json } = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config/config')

const { ProductsRouter, UsersRouter } = require('./routes')

// const UsersRouter = require('./routes/users.routes')
// const ProductsRouter = require('./routes/products.routes')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(json())

// app.use('/users', UsersRouter)
// app.use('/products', ProductsRouter)

app.use('/users', UsersRouter)
app.use('/products', ProductsRouter)

app.use(
  cors({
    origin: config.client.URL,
  })
)

module.exports = app
