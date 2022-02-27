const express = require("express")
const router = express.Router()
const {v4:uuidv4} = require("uuid")
const Order = require("../models/orderModal")
const stripe = require("stripe")("sk_test_51KWXjESHh66WoN9CNy7WbfhplP4tN0Qj9eCpDpzFVfeBZs3Iamiq2ns9I7x0FlEMDQX3K0A7q57bYYq4B5xFfRpx00ku0JZeyO")

router.post("/placeorder",async(req,res)=>{
    const {token,subtotal,currentUser,cartItems}=req.body;
    try {
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id,
        });
        const payment = await stripe.paymentIntents.create(
            {
                amount:subtotal*100,
                currency:"inr",
                customer:customer.id,
                receipt_email:token.email,
                payment_method_types: ['card'],
            },{
                idempotencyKey:uuidv4()
            }
        )
        if(payment){
            const newOrder = new Order ({
                name:currentUser.name,
                email:currentUser.email,
                userid:currentUser._id,
                orderItems:cartItems,
                orderAmount:subtotal,
                shippingAddress:{
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    pincode:token.card.address_zip,
                },
                transectionId:payment.source,
            })
            newOrder.save()
            res.send("Payment Success")
        }else{
            res.send("payment failed")
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message:"Something went wrong",
            error:error.stack
        })
    }
})

router.post("/getuserorder",async(req,res)=>{
    const {userid}=req.body
    console.log(userid)
    try {
        const orders = await Order.find({userid}).sort({_id:"-1"})
        console.log(orders)
        res.status(200).send(orders)
    } catch (error) {
        res.status(400).json({
            message:"Something went wrong",
            error:error.stack
        })
    }
})

router.get("/getallorder",async(req,res)=>{
    
    try {
        const orders = await Order.find({})
        res.status(200).send(orders)
    } catch (error) {
        res.status(400).json({
            message:"Something went wrong",
            error:error.stack
        })
    }
})

router.post("/deliverorder",async(req,res)=>{
    const orderid = req.body.orderid
    console.log(orderid)
    try {
        const order = await Order.findOne({_id:orderid})
        order.isDeliverd = true
        await order.save()
        res.status(200).send("order Deliverd success")
    } catch (error) {
        res.status(400).json({
            message:"Something went wrong",
            error:error.stack
        })
    }
})

module.exports = router;