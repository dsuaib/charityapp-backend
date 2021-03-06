const mongoose = require('mongoose')

const registerMemberAccount = new mongoose.Schema({
    
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        unique: true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    donations:{
        type: Number,
    }
})

module.exports = mongoose.model('member', registerMemberAccount, 'members')