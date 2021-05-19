const express=require('express');
const router=express.Router();
const {getUsers,findUser,addUser}=require("../controllers/user.controller");


router.route('/').get(getUsers);

router.route("/login").post(findUser);

router.route("/signup").post(addUser);

module.exports=router