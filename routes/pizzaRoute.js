const express = require("express")
const router = express.Router()
const pizzaModel = require('../models/PizzaModel')

// Get all pizza || @Get request
// http://localhost:8080/api/pizzas/getAllPizzas
router.get("/getAllPizzas",async(req,res)=>{
    try {
        const pizza = await pizzaModel.find()
        // console.log(pizza)
        res.send(pizza)
    } catch (error) {
        res.json({message:error})
    }
})

router.post("/addPizza",async(req,res)=>{
    const pizza = req.body.pizza
    console.log(req.body.pizza)
    try {
        const newPizza = new pizzaModel({
            name:pizza.name,
            image:pizza.image,
            varients:["small","medium","large"],
            description:pizza.description,
            category:pizza.category,
            prices:[pizza.prices]
        })
        data = await newPizza.save()
        res.status(201).send(data)
    } catch (error) {
        res.json({message:error})
    }
})

router.post("/getpizzabyid",async(req,res)=>{
    const pizzaId = req.body.pizzaId
    console.log(pizzaId)
    try {
        const pizza = await pizzaModel.findById({_id:pizzaId})
        // console.log(pizza)
        res.send(pizza)
    } catch (error) {
        res.json({message:error})
    }
})

router.post("/updatepizza",async(req,res)=>{
    const updatedPizza = req.body.updatedPizza
    const pizza = await pizzaModel.findById({_id:updatedPizza._id})
    pizza.name =updatedPizza.name
    pizza.description = updatedPizza.description
    pizza.image = updatedPizza.image
    pizza.category=updatedPizza.category
    pizza.prices=updatedPizza.prices
    await pizza.save()
    res.status(201).send("pizza Update Success")
})

router.post("/deletepizza",async(req,res)=>{
    const pizzaId = req.body.pizzaId
    console.log(pizzaId)
    try {
        await pizzaModel.findByIdAndDelete({_id:pizzaId})
        res.status(200).send("Pizza Deleted")
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error});
    }
})

module.exports = router;