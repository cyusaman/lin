const express = require('express')
const router= express.Router()


const {createDocuments, documentSearch,getDocuments}= require('../controllers/document')

router
    .route('/document')
    .post(createDocuments)

router
    .route('/document/:keyword')
    .get(documentSearch)

    router
    .route('/searchReport')
    .get(getDocuments)



module.exports= router