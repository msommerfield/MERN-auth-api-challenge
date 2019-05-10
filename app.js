const express = require('express')
const app = express()
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const methodOverride = require('method-override')
const usersController = require('./controllers/users')

app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }))
app.use(flash())

app.use('/', usersController)

const PORT = process.env.PORT || 7777

app.listen(PORT, () => {
  console.log(`🔥  🔥  🕺  🔥  🔥 Disco Inferno on ${PORT}`)
})