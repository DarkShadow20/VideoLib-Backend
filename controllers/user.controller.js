const User=require("../models/user-model");

const findUser=async(req,res)=>{
  const {email,password}=req.body;
  const userExists=await User.exists({email})
  if(userExists){
    let user=await User.findOne({ email , password })
    if(user){
      return res.json({success:true,user:{_id:user._id,name:user.name}});
    }else{
      return res.status(401).json({
        success:false,
        message:"Username and password does not match"
      })
    }
  }else{
    return res.status(401).json({
      success:false,
      message:"Username does not exist"
    })
  }
}

const addUser=async(req,res)=>{
  try{
    const userData=req.body
    const emailExists=await User.exists({email:userData.email})
    if(emailExists){
      res.status(401).json({
        success:false,
        message:"Email already exists"
        })
        return emailExists;
    }
    let newUser=new User(userData);
    await newUser.save();
    const user={_id:newUser._id,name:newUser.name}
    return res.status(201).json({success:true,user})
  }catch(err){
    console.log(err)
    return res.status(500).json({
      success:false,
      message:"Could not add the user.Try Again!",
      errMessage:err.message
    })
  }
};

module.exports={
  findUser,
  addUser
};