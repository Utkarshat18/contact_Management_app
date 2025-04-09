const express=require("express");
const {registerUser,loginUser,currentUser} = require("../controllers/userController");
const validatetoken = require("../middleware/ValidatetokenHandler");
const router=express.Router();

router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/current",validatetoken,currentUser);

module.exports=router;