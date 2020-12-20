const mongoose = require('mongoose')

const champsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    position: {
        type: String,
    },
    ultimate: {
        type: String,
    }
})

module.exports = mongoose.model('champs', champsSchema)