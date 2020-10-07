const express = require('express')
const router= express.Router()


const {createDocuments, documentSearch}= require('../controllers/document')

router
    .route('/document')
    .post(createDocuments)

router
    .route('/document/:keyword')
    .get(documentSearch)



module.exports= router