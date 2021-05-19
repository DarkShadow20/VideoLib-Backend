const mongoose=require("mongoose");
const {Schema}=mongoose;

const userSchema=new Schema({
  name:{
    type:String,
    required:"Name is a mandatory attribute"
  },
  password:{
    type:String,
    required:"Password is a required attribute"
  },
  email:{
    type:String,
    required:"Email is a mandatory attribute",
    unique:true
  }
},{
  timestamps:true
})

const User=mongoose.model("User",userSchema);
module.exports=User