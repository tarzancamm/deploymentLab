require('dotenv').config()
const express = require('express')
const { PORT } = process.env

const app = express()

// Middleware
app.use(express.json())


const { home } = require('./controllers/controller')
app.get('/', home)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))