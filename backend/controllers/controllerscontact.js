//to get all the contacts
const getallcontact=(req,res)=>{
    res.send("Get all the contacts from diary ");
}

//to get one specific contact with the id
const getidcontact=(req,res)=>{
    res.send(`get the contact with the id ${req.params.id}`)
}

//to create a new contact
const createcontact=(req,res)=>{
    res.send(`creating a new contact with the id ${req.params.id}`)
}

//updating the given contact
const updatecontact=(req,res)=>{
    res.send(`updating the contact with id ${req.params.id}`)
}

//deleting the contact
const deletecontact=(req,res)=>{
    res.send(`deleting the given contact with id ${req.params.id}`)
}

module.exports={getallcontact,getidcontact,createcontact,updatecontact,deletecontact};