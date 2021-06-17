const express = require('express')
const path = require('path')
const hbs = require('hbs')
const userRoutes = require('../routes/userAccount.routes')
const oprerationRoutes = require('../routes/operations.routes')
const app = express()
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))
 hbs.registerPartials(path.join(__dirname, '../frontend/layouts'))
app.set('views', path.join(__dirname, '../frontend/views'))
app.use(express.urlencoded())
app.use(userRoutes)
app.use(oprerationRoutes)
// const session =require('express-session')
// app.use(session({secret:'abs'}))

module.exports = app

