require('dotenv').config()
const express = require('express')
const { PORT } = process.env

const app = express()

// Middleware
app.use(express.json())


const { home, css, life, lots, wood } = require('./controllers/controller')
app.get('/', home)
app.get('/css', css)
app.get('/image-one', life)
app.get('/image-two', lots)
app.get('/image-three', wood)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))