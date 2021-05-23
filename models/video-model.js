const mongoose=require("mongoose");
const {Schema}=mongoose;
const videoList=require("./video-data");

const videoSchema=new Schema({
  videoId:{
    type:String,
    required:"Video Id is a required attribute",
    unique:true
  },
  thumbnailURL:{
    type:String,
    required:"Thumbnail URL is a required attribute"
  },
  title:{
   type:String,
   required:"title is required"
  },
  description:String,
  channelName:String,
  published_date:String
},
{
  timestamps:true,
}
)

const Video=mongoose.model("Video",videoSchema);

const fillVideosCollection= async ()=> {
  try {
    videoList.forEach(async (video) => {
      const newVideo = new Video(video);
      const savedVideo = await newVideo.save();
      console.log(savedVideo);
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = { Video, fillVideosCollection };