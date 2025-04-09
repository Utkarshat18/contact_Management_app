const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");

const validatetoken=asyncHandler(async(req , res , next)=>{
let token;
const authheader=req.headers.authorization || req.headers.Authorization;
if(authheader && authheader.startsWith("Bearer"))
{
    token=authheader.split(" ")[1];
    jwt.verify(token,process.env.ACCESS_TOKEN_SECERT,(err,decoded)=>{
        if(err)
        {
            res.status(401);
            throw new Error("User is not authorized");
        }
        console.log(decoded);
        req.user=decoded.user;
        next();
    })
    if(!token)
    {
        res.status(401);
        throw new Error("User is not authorized or token is not provided");
    }
}
});

module.exports=validatetoken;