//to get all the contacts
const getallcontact=(req,res)=>{
    console.log("body request :",req.body);
    res.json({message:"Get all the contacts"});
}

//to get one specific contact with the id
const getidcontact=(req,res)=>{
    res.json({message:`get the contact with the id ${req.params.id}`})
}

//to create a new contact
const createcontact=(req,res)=>{
    res.json({message:`creating a new contact`})
}

//updating the given contact
const updatecontact=(req,res)=>{
    res.json({message:`updating the contact with id ${req.params.id}`})
}

//deleting the contact
const deletecontact=(req,res)=>{
    res.json({message:`deleting the given contact with id ${req.params.id}`})
}

module.exports={getallcontact,getidcontact,createcontact,updatecontact,deletecontact};