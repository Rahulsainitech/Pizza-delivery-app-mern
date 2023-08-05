const express = require("express")
const dotenv=require("dotenv")
const connectDB = require("./config/config");
const morgan = require("morgan")
const app = express()
const cors=require('cors')

//config dotenv
dotenv.config()

// mongodb connection
connectDB()

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//route
app.use("/api/pizzas",require("./routes/pizzaRoute"))
app.use("/api/users",require("./routes/userRoute"))
app.use("/api/orders",require("./routes/orderRoute"))

if(process.env.NODE_ENV==="production"){
    app.use(express.static('clients/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'clients','build','index.html'))
    })
}else{
    app.get("/",(req,res)=>{
        res.send("<h2>hello from my side</h2>")
    })
}



const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`server is running on ${process.env.NODE_ENV} and listening on ${port}`)
})