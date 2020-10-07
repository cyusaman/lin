const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser =  require('body-parser')
const app = express();
const document= require('./routes/document')
const connectdb = require('./config/db.js')
const user = require('./routes/user')
const contact= require('./routes/contact')
const path= require('path')
const ejsstuf= require('ejs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use(morgan('dev'))
dotenv.config({path: './config/config.env'})
connectdb();

app.use('/ella', document)
app.use('/ella', user)
app.use('/ella', contact)
// app.use('', (req,res,next)=>{
//     console.log('hello')
// })
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use('/image',express.static(path.join(__dirname, 'images')))
app.get('/', (req, res, next) =>{
    res.render('indexss')
})
app.get('/Reportlossed', (req, res, next)=>{
    res.render('search')
})

app.get('/Reportfound', (req, res, next)=>{
    res.render('report')
})

app.get('/aboutus', (req, res, next)=>{
    res.render('about')
})

app.get('/contactus', (req, res, next)=>{
    res.render('contact')
})

app.get('/admin', (req, res, next)=>{
    res.render('admin')
})

app.get('/trythis', (req, res, next)=>{
    res.render('try this')
})

app.get('/signup', (req, res, next)=>{
    res.render('signup')
})
const PORT = 8000 || process.env.PORT

app.listen(8000, console.log(`am listen on ${PORT}`))