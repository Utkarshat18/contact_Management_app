const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Get all the contacts from diary ");
});

module.exports=router;