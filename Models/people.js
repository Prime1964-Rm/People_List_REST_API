const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create people Schema and Model

const PeopleSchema = new Schema({
    Name:{
        type:String,
        required: [true, "Name field is required"]
    },
    Age:{
        type:Number,
        required:[true,"Age field is required"]
    },
    Gender:{
        type:String,
        required:[true,"Gender field is required"]
    },
    Mobile:{
        type:Number,
        required:[true,"Mobile number is required"]
    }
})

const People = mongoose.model('people',PeopleSchema);
module.exports= People;