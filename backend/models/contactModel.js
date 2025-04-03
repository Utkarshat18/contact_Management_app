const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add the name "],
    },
    age:{
        type:String,
        required:[true,"Please add the age "],
    },
    phonenumber:{
        type:String,
        required:[true,"Please add your phone number"],
    }
},{
    timestamps:true,
})

module.exports=mongoose.model("Contact",contactSchema);
