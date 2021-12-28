const express = require('express')
const { json, urlencoded } = require('body-parser')
const fileUpload = require('express-fileupload')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config/config')

const { ProductsRouter, UsersRouter } = require('./routes')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(fileUpload({ createParentPath: true }))

app.use(
  cors({
    origin: config.client.URL,
  })
)

app.use('/users', UsersRouter)
app.use('/products', ProductsRouter)

app.use(express.static('uploads'))

module.exports = app
