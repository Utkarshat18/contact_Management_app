const asyncHandler=require("express-async-handler");   
const Contact=require("../models/contactModel");
//Without asyncHandler, you would need to manually wrap every async function with try-catch, which is repetitive.
//With asyncHandler, unhandled errors are automatically passed to Express's error-handling middleware. 

//to get all the contacts
const getallcontact=asyncHandler(async(req,res)=>{
    // const contacts=await Contact.find();
    // res.json({message:"Get all the contacts"});
    console.log("Fetching all contacts...");
    
    const contacts = await Contact.find(); // Fetch all contacts from DB

    if (!contacts || contacts.length === 0) {
        res.status(404);
        throw new Error("No contacts found");
    }
    res.status(200).json(contacts);
});

//to get one specific contact with the id
const getidcontact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error ("Contact not found");
    }

    res.status(200).json(contact);
})

//to create a new contact
const createcontact=asyncHandler(async(req,res)=>{
    console.log("Request received for creating contact");
    console.log("body request :",req.body);
    const {name,age,phonenumber}=req.body;
    if(!name || !age || !phonenumber)
    {
        res.status(400);
        throw new Error ("All fields are mandatory");
    }
    const contact=await Contact.create({
        name,age,phonenumber,
    });
    res.json(contact);
    //res.json({message:`creating a new contact`})
})

//updating the given contact
const updatecontact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error ("Contact not found");
    }
    const updatedcontact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedcontact);
})

//deleting the contact
const deletecontact=asyncHandler(async(req,res)=>{
    console.log("delete operation started")
    const contact=await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error ("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);
})

module.exports={getallcontact,getidcontact,createcontact,updatecontact,deletecontact};