const asyncHandler=require("express-async-handler");
const bcrypt=require("bcrypt");
const User=require("../models/userModel");

//register a user
//router post api/user/register
//public access
const registerUser=asyncHandler(async (req,res)=>{
    console.log("Register new user");
    console.log("request Body",req.body);
    const {username,email,password}=req.body;
    if(!username || !email || !password)
    {
        res.status(400);
        throw new Error("All fields are required");
    }
    const userAvailable=await User.findOne({email});
    if(userAvailable)
    {
        res.status(400);
        throw new Error("User already exist");
    }
    //bcrypt libraby is used to hash the password
    const hashedpassword=await bcrypt.hash(password,10);
    console.log("Hashed password is : ",hashedpassword);
    console.log("okay");
    const user=await User.create({
        username,
        email,
        password:hashedpassword,
    });
    console.log("register user details ",user);
    //now i don't want to show my hashed password
    if(user)
    {
        res.status(201).json({_id:user.id,email:user.email});
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({message:`User is created successfully`});
});

//login a user
//router api/user/login
//public access
const loginUser=asyncHandler(async(req,res)=>{
    console.log("login user");
    res.json({message:"Login the user"});
});

//current user
//router api/user/current
const currentUser=asyncHandler(async(req,res)=>{
    res.json({message:"current user "});
});

module.exports={registerUser,loginUser,currentUser};