const mongoose = require("mongoose")

const connectDB=async()=>{
    try {
        const url = process.env.MONGO_URI
        const conn = await mongoose.connect(url)
        console.log(`connection is successful ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB;