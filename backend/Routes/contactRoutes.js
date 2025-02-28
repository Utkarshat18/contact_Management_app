const express=require("express");
const router=express.Router();
const {getallcontact,getidcontact,createcontact,updatecontact,deletecontact}=require("../controllers/controllerscontact")

//get all contacts
router.route("/").get(getallcontact);

//get specified contact with given id
router.route("/:id").get(getidcontact);

//create contact with post operation
router.route("/").post(createcontact);

//Update contact with the PUT operation
router.route("/:id").put(updatecontact);

//Deleting the contact with given id
router.route("/:id").delete(deletecontact);

module.exports=router;