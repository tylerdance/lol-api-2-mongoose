const express = require('express')
const app = express()

const models = require('./models')

// body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('lol api')
})

app.use('/champs', (require('./controllers/champsController.js')))

const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
})