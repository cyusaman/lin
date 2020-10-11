const mongoose = require('mongoose')


const documentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    documentType : {
        type: String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    PhoneNumber : {
        type: String,
        required: true
    },
    documentSerialNumber : {
        type: String,
        required: true
    },
    comment : {
        type: String,
    },
    reporter:{
        type: String,
    }
  })

module.exports = mongoose.model('Document', documentSchema)
