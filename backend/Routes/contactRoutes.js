const express=require("express");
const router=express.Router();

//get all contacts
router.route("/").get((req,res)=>{
    res.send("Get all the contacts from diary ");
});

//get specified contact with given id
router.route("/:id").get((req,res)=>{
    res.send(`Get the contact with id ${req.params.id}`)
});

//create contact with post operation
router.route("/").post((req,res)=>{
    res.send(`creating the contact`)
});

//Update contact with the PUT operation
router.route("/:id").put((req,res)=>{
    res.send(`Updating the contact with the given id ${req.params.id}`)
});

//Deleting the contact with given id
router.route("/:id").delete((req,res)=>{
    res.send(`deleting the contact with the ${req.params.id}`)
});

module.exports=router;