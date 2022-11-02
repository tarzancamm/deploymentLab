require('dotenv').config()
const express = require('express')
const { SERVER_PORT } = process.env

const app = express()

// Middleware
app.use(express.json())


const { home } = require('./controller')
app.get('/', home)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))