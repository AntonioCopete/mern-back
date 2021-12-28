const express = require('express')
const { json } = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const { CONFIG } = require('./config/config')
const { authMiddleware } = require('./middleware/authMiddleware')

const { ProductsRouter, UsersRouter } = require('./routes')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(json())

app.use(
  cors({
    origin: CONFIG.development.client.URL,
  })
)

app.use('/users', UsersRouter)
app.use('/products', ProductsRouter)

module.exports = app
