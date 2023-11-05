const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    }
}, { timeStamps: true })

module.exports = mongoose.model('User', userSchema)