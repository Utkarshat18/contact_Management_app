const asyncHandler=require("express-async-handler");

//register a user
//router post api/user/register
//public access
const registerUser=asyncHandler(async (req,res)=>{
    res.json({message:"Register the user"})
});

//login a user
//router api/user/login
//public access
const loginUser=asyncHandler(async(req,res)=>{
    res.json({message:"Login the user"});
});

//current user
//router api/user/current
const currentUser=asyncHandler(async(req,res)=>{
    res.json({message:"current user "});
});

module.exports={registerUser,loginUser,currentUser};