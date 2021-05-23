const express=require('express');
const router=express.Router();
const {findUser,addUser}=require("../controllers/user.controller");



router.route("/login").post(findUser);

router.route("/signup").post(addUser);

module.exports=router