const mongoose = require('mongoose')

const createAnnouncementSchema = new mongoose.Schema({
    
    fullName:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('announcement', createAnnouncementSchema)


