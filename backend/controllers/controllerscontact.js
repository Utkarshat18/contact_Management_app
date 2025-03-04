const asyncHandler=require("express-async-handler");    

//to get all the contacts
const getallcontact=asyncHandler(async(req,res)=>{
    console.log("body request :",req.body);
    const {name,age,phonenumber}=req.body;
    if(!name || !age || !phonenumber)
    {
        res.status(400);
        throw new Error ("All fields are mandatory");
    }
    res.json({message:"Get all the contacts"});
});

//to get one specific contact with the id
const getidcontact=asyncHandler(async(req,res)=>{
    res.json({message:`get the contact with the id ${req.params.id}`})
})

//to create a new contact
const createcontact=asyncHandler(async(req,res)=>{
    res.json({message:`creating a new contact`})
})

//updating the given contact
const updatecontact=asyncHandler(async(req,res)=>{
    res.json({message:`updating the contact with id ${req.params.id}`})
})

//deleting the contact
const deletecontact=asyncHandler(async(req,res)=>{
    res.json({message:`deleting the given contact with id ${req.params.id}`})
})

module.exports={getallcontact,getidcontact,createcontact,updatecontact,deletecontact};