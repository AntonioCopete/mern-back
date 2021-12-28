const express = require('express')
const { json } = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config')

const { ProductsRouter, UserRouter } = require('./routes')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(json())

app.use(
  cors({
    origin: config.client.URL,
  })
)

app.use('/users', UserRouter)

app.use('/products', ProductsRouter)

module.exports = app
