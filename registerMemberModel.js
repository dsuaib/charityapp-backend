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

const GetRegisteredMember = mongoose.model('charitytable', registerMemberAccount, 'members')

module.exports = mongoose.model('charitytable', registerMemberAccount, 'members')