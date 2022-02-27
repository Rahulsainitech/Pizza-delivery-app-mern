const mongoose = require("mongoose")
const orderSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"order name required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    orderAmount:{
        type:String,
    },
    userid:{
        type:String,
        // required:true
    },
    orderItems:[],
    shippingAddress:{
       type:Object
    },
    isDeliverd:{
        type:Boolean,
        default:false
    },
    transectionId:{
        type:String,
        // required:true
    }
},{
    timestamps:true
})
module.exports = mongoose.model("order",orderSchema)