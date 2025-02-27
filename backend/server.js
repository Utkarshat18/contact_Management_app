//creating a basic express server
const express=require("express");
const dotenv=require("dotenv").config();
const app=express();

const port=process.env.PORT || 6000;

// app.get("/api/contacts",(req,res)=>{
//     res.send("Get all the contacts");
// });

app.use("/api/contacts",require('./Routes/contactRoutes.js'));

//to get the json message
// app.get("/api/contacts",(req,res)=>{
//     res.json({message:"Get all the contacts"});
// });

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});