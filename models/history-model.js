const mongoose=require("mongoose");
const {Schema}=mongoose;

const historySchema=new Schema({
  userId:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  videos:[{id:{type:Schema.Types.ObjectId, ref:"Video"},active:Boolean}]
})

const History=mongoose.model("History",historySchema);

module.exports=History;