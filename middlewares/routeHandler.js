const routeHandler=(req,res)=>{
    res.status(404).json({
      success:false,
      message:"the route you are looking for is not available"
    });
  };
  
  module.exports=routeHandler;