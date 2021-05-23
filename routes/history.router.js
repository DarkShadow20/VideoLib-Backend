const express=require("express");
const router=express.Router();
const {getHistory,findUserHistory,getUserHistory,addToHistory,clearHistory}=require("../controllers/history.controller");

router.route("/").get(getHistory);

router.param("userId",findUserHistory)

router.route("/:userId").get(getUserHistory)
.post(addToHistory)
.delete(clearHistory)

module.exports=router;