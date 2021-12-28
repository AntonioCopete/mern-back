const express = require('express')
const { json } = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config/config')

const { ProductsRouter, UsersRouter } = require('./routes')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(json())

<<<<<<< HEAD

=======
>>>>>>> main
app.use(
  cors({
    origin: config.client.URL,
  })
  )

<<<<<<< HEAD
  app.use('/users', UsersRouter)
  app.use('/products', ProductsRouter)
  
=======
app.use('/users', UsersRouter)
app.use('/products', ProductsRouter)

>>>>>>> main
module.exports = app
