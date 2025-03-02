//creating a basic express server
const express=require("express");
const errorHandler = require("./middleware/errorHandler.js");
const dotenv=require("dotenv").config();
const app=express();

const port=process.env.PORT || 6000;

// app.get("/api/contacts",(req,res)=>{
//     res.send("Get all the contacts");
// });

app.use(express.json());//work as a middleware to accept the request body from server
app.use("/api/contacts",require('./Routes/contactRoutes.js'));
app.use(errorHandler);

//to get the json message
// app.get("/api/contacts",(req,res)=>{
//     res.json({message:"Get all the contacts"});
// });

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});