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
    },
    announcementDate:{
        type:Date,
        default:new Date()
    }
})

module.exports = mongoose.model('announcement', createAnnouncementSchema)


