const {Video}=require("../models/video-model");

const getVideos=async(req,res)=>{
  try{
    const videos = await Video.find({});
    res.status(200).json({success:true,videos})
  }catch(err){
    res.status(500).json({
      success:false,
      message:"Unable to get videos",
      errMessage:err.message
    })
  }
};

const findVideo=async(req,res,next,vid)=>{
  try{
    const video=await Video.findById(vid);
    if(!video){
      throw Error("Unable to fetch the video");
    }
    req.video=video
    next();
  }catch(err){
    console.log(err)
    res.status(400).json({
      success:false,
      message:"Unable to retrieve the video"
    })
  }
}

const getVideoById=async(req,res)=>{
  const {video}=req;
  video.__v=undefined;
  res.status(200).json({success:true,video})
}

module.exports={getVideos,findVideo,getVideoById};