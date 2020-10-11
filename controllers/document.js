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
        const reporter= req.body.reporter
        const document = await  Document.create({
            name,
            documentType,
            location,
            PhoneNumber,
            documentSerialNumber,
            comment,
            reporter
        })
        res.redirect('/searchReport')
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

exports.getDocuments= async (req, res, next) =>{
    try {
        const data= await Document.find()
        // console.log(data)
        res.render('searchReport',{
            documents:data
        })
        // res.status(200).json({
        //     msg:'success',
        //     data
        // })
    } catch (err) {
        console.log(err)
    }
}