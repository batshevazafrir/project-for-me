const mongoose = require('mongoose');

const user = mongoose.Schema({
    name: {
        type: String,
        default: 'name',
        trim: true
    },
    age: {
        type: Number,
        require: true,
        default: 'age',
        trim: true
    },
    city: {
        type: String,
        require: true,
        default: 'city',
        trim: true
    },
    email:{
        type: String,
        default:'bat7@gmail.com',
        trim: true
    },
    phone:{
        type: Number,
        default: 'phone',
        trim: true
    }
})

module.exports = mongoose.model('user', user);