const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false
    },
})
UserSchema.pre('save', async function (next) {
    try {
     const salt =  await bcrypt.genSalt(12);
     this.password = await bcrypt.hash(this.password, salt)
    } catch (err) {
        console.log(err.message)
    }
})

UserSchema.method({
  webtoken : function () {
    return jwt.sign({id: this._id}, process.env.SECRET,{
        expiresIn: process.env.TADE
    });
},
 matchpass :async function(passw){
    return await bcrypt.compare(passw, this.password)
}
})



module.exports = mongoose.model('User', UserSchema);
