'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    contactId: {
        type: String,
        Required: 'Please enter'
    },
    firstName: {
        type: String,
        Required: 'Please enter'
    },
    lastName: {
        type: String,
        Required: 'Please enter'
    },
    //missed left last_name
    phone: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    facebook: {
        type: String,
        Required: 'Please enter'
    },
    createdDate:{
        type: Date,
        default :Date.now
    },
    imageUser: {
        type: String,
        Required: 'Please enter'
    },
    
})

var AccountSchema = new Schema({
    userName: {
        type: String,
        Required: 'Please enter'
    },
    passWord: {
        type: String,
        Required: 'Please enter'
    }
})

module.exports = mongoose.model('Users', UserSchema)
module.exports = mongoose.model('Accounts', AccountSchema)