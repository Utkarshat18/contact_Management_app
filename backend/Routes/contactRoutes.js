const express=require("express");
const router=express.Router();
const {getallcontact,getidcontact,createcontact,updatecontact,deletecontact}=require("../controllers/controllerscontact")

//get all contacts
router.route("/").get(getallcontact).post(createcontact);

//get specified contact with given id
router.route("/:id").get(getidcontact).put(updatecontact).delete(deletecontact);

module.exports=router;
