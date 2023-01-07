const router=require('express').Router()

const Review=require("../models/Review")
//create
router.post("/",async(req,res)=>{
    const newRev=new Review(req.body)
    
    try{
        const savedRev=await newRev.save()
        console.log(savedRev)
        res.status(200).json(savedRev)
    }catch(err){
        res.status(404).json(err)
        console.log(err)
    }
})
//get
router.get("/",async(req,res)=>{
    try{
        const Reviews = await Review.find()
        res.status(200).json(Reviews)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports=router