const asyncHandler=require("express-async-handler");

//register a user
//router post api/user/register
//public access
const registerUser=asyncHandler(async (req,res)=>{
    res.json("Register the user");
});

//login a user
//router api/user/login
//public access
const loginUser=asyncHandler(async(req,res)=>{
    res.json("Login the user");
});

//current user
//router api/user/current
const currentUser=asyncHandler(async(req,res)=>{
    res.json("current user ");
});

module.exports={registerUser,loginUser,currentUser};