const express = require('express')
const routes = require('./routers/api')
const bodyParser= require('body-parser')

const mongoose = require('mongoose')
// set up Express app

const app = express();

//conncet to mongodb
mongoose.connect('mongodb://localhost/people')
mongoose.Promise = global.Promise

app.use(bodyParser.json())
//initialized route
app.use('/api',routes)

//error handling middleware
app.use((err,req,res,next)=>{
    res.status(422).send({Error:err.message})
    
})

// Listen for request

app.listen(process.env.port||4000, ()=>{
    console.log('now listeneing for requests');
})

