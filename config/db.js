const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        const con = await mongoose.connect(process.env.DB,{
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
        // console.log(`am on ${connection.host.port} db`)
        console.log(`am on ${con.connection.host} db`)
    } catch (err) {
        console.log(err.message)
    }
    
}


module.exports = connectdb