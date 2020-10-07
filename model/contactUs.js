const mongoose = require('mongoose')


const contactUs = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    subject : {
        type: String,
        required: true
    },
  })

module.exports = mongoose.model('ContactUs', contactUs)
