const mongoose = require("mongoose");

const userShema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Email is required"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model("PzUser",userShema)