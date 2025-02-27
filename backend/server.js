//creating a basic express server
const express=require("express");
const dotenv=require("dotenv").config();
const app=express();

const PORT=process.env.port || 6000;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});