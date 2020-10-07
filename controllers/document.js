const Document= require('../model/document')
const path = require('path')


exports.createDocuments = async (req,res, next) =>{
    try {
        const name=  req.body.name
        const documentType = req.body.documentType
        const location= req.body.location
        const PhoneNumber= req.body.PhoneNumber
        const documentSerialNumber= req.body.documentSerialNumber
        const comment= req.body.comment
        const document = await  Document.create({
            name,
            documentType,
            location,
            PhoneNumber,
            documentSerialNumber,
            comment
        })
        // res.status(200).json({
        //     msg: 'success',
        //     name,
        //     documentType,
        //     location,
        //     comment
        // })
        res.redirect('/')
    } catch (err) {
        console.log(err.message)
    }
}

exports.documentSearch= async (req, res, next) =>{
    try {
        const {keyword}= req.params
        const data= await Document.find({
        $or: [
            {"name": {$regex: keyword, $options : 'i'}},
            {"documentSerialNumber": {$regex: keyword, $options : 'i'}},
        ]
        })
        res.status(200).json({
            msg:'success',
            data
        })
    } catch (err) {
        console.log(err)
    }
}
