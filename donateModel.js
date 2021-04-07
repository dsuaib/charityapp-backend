const mongoose = require('mongoose')

const donateSchema = new mongoose.Schema({
    
    donationAmount:{
        type:Number,
        required:true
    },
    creditCardNumber:{
        type:Number,
        required:true
    },
    cvv:{
        type:Number,
        required:true
    },
    expirationDate:{
        type:Number,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    streetAddress:{
        type:String,
        required:true
    },
    zipCode:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('donation', donateSchema)
