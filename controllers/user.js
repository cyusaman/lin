const express= require('express')
const User = require('../model/user.js')


exports.createUser = async (req,res, next) =>{
    try {
        const username = req.body.username
        const email= req.body.email
        const password= req.body.password
        // , email,password}
        console.log(req.body.email)
        const user = User.create({
            username,
            email,
            password,
        })
        res.redirect('/');
        // res.status(200).json({
        //     msg: 'success',
        //     username,
        //     email
        // })
    } catch (err) {
        res.redirect('/trythis');
        console.log(err.message)
    }
}
exports.loginUser = async (req,res,next) => {
    try {
        // const {username, password} = req.body
        const username = req.body.username
        const password= req.body.password
        // res.redirect('/');
        // console.log(username,password)
        if (!username || !password) {
            const pl = 'please enter username and password'
            return pl
        }
        const user =  await User.findOne({ username }).select('+password')
        if (!user) {
            res.redirect('/trythis');
        }
        const match = await user.matchpass(password);
        if (!match) {
            res.redirect('/trythis');
        }
        const token = await user.webtoken()
        res.redirect('/');
        // res
        // .status(200)
        // .json({
        //     success: true,
        //     token,
        // })
    } catch (err) {
        console.log(`${err.message} holla`)
        res.redirect('/admin');
    }
}

exports.loginAdmin = async (req,res,next) => {
    try {
        // const {username, password} = req.body
        const username = req.body.username
        const password= req.body.password
        // res.redirect('/');
        // console.log(username,password)
        if (!username || !password) {
            const pl = 'please enter username and password'
            return pl
        }
        const user =  await User.findOne({ username }).select('+password')
        if (!user) {
            res.redirect('/admin');
        }
        const match = await user.matchpass(password);
        if (!match) {
            res.redirect('/admin');
        }
        const token = await user.webtoken()
        res.redirect('/contacts');
        // res
        // .status(200)
        // .json({
        //     success: true,
        //     token,
        // })
    } catch (err) {
        console.log(`${err.message} holla`)
        res.redirect('/admin');
    }
}
