const express=require("express");
const router=express.Router();
const{getVideos,findVideo,getVideoById}=require("../controllers/video.controller")


router.route("/").get(getVideos);

router.param("videoId",findVideo);

router.route("/:videoId").get(getVideoById);

module.exports=router