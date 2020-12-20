require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('connected to mongoDB');
})

module.exports = {
    Champs: require('./Champs')
}