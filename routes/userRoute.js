const express = require("express");
const router = express.Router();
const PzUser = require("../models/userModal");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new PzUser({ name, email, password });
  try {
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Register Success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await PzUser.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.status(200).send(currentUser)
    } else {
        res.status(400).json({message:"Login failed"})
    }
  } catch (error) {
      res.status(404).json({message:"Oops! something went wrong try again after some time"})
  }
});

router.get("/getallusers",async (req,res)=>{
  try {
    const users = await PzUser.find({})
    res.status(200).send(users)
  } catch (error) {
    res.status(404).json({message:error.stack})
  }
})

router.post("/deleteuser",async(req,res)=>{
  const userid = req.body.userId
  try {
    await PzUser.findOneAndDelete({_id:userid});
    res.status(200).send("User Deleted")
  } catch (error) {
    res.status(404).json({message:error.stack});
  }
})

router.post("/addnewadmin",async(req,res)=>{
  const userid = req.body.userid
  console.log(userid)
  try {
      const user = await PzUser.findById({_id:userid})
      if (user.isAdmin ){
        user.isAdmin=false
        await user.save()
      }else{
        user.isAdmin=true
        await user.save()
      }
      
      res.status(200).send("Edit as admin success")
  } catch (error) {
      res.status(400).json({
          message:"Something went wrong",
          error:error.stack
      })
  }
})
module.exports = router;
