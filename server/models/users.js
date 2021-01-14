const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,'name is missing']
    },
    email: {
        type: String,
        required:[true,'email is missing']

    },
    pwd: {
        type: String,
        required:[true,'pwd is missing']

    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User
