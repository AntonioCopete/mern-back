const express = require('express')
const { json, urlencoded } = require('body-parser')
const fileUpload = require('express-fileupload')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config/config')

const UserRouter = require('./routes/users-routes')
const ProductRouter = require('./routes/products-routes')

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

app.use('/users', UserRouter)
app.use('/', ProductRouter)

// public folders
app.use(express.static('uploads'))

module.exports = app
