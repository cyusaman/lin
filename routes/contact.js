const express= require('express')
const router= express.Router()
const {createContact, getcontact}=require('../controllers/contact')

router
    .route('/contactUs')
    .post(createContact)

router
    .route('/contacts')
    .get(getcontact)



module.exports= router
