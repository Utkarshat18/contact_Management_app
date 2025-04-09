const asyncHandler=require("express-async-handler");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
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
    const {email, password}=req.body;
    if(!email || !password)
        {
            res.status(400);
            throw new Error("All fiels are Mandatory");
        }
        const user=await User.findOne({email});
        //now all database user information will store in user
        //comparing password with hashed password
        if(user && (await bcrypt.compare(password,user.password)))
            {
                const accesstoken=jwt.sign({
                    user:{
                        username:user.username,
                        email:user.email,
                        id:user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECERT,
        {
            expiresIn:"5m"
        })
        res.status(200).json({accesstoken});
    }else{
        throw new Error("email or password is not valid ");
    }
    console.log("login user");
});

//current user
//router api/user/current
const currentUser=asyncHandler(async(req,res)=>{
    res.json(req.user);
});

module.exports={registerUser,loginUser,currentUser};