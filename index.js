const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const {connectDB}=require("./db/db.connect");


const app=express();
const port=4000;
app.use(cors());
app.use(bodyParser.json());


connectDB();

//middleware
const errorHandler=require("./middlewares/errorHandler");
const routeHandler=require("./middlewares/routeHandler");

//routers
const userRouter=require("./routes/user.router")
const videoRouter=require("./routes/video.router")
const historyRouter = require("./routes/history.router");
const likedVideoRouter = require("./routes/likedVideo.router");
const playlistRouter = require("./routes/playlist.router");


app.use("/users",userRouter)
app.use("/video",videoRouter)
app.use("/history",historyRouter)
app.use("/liked-video", likedVideoRouter);
app.use("/playlist", playlistRouter);


app.get("/", (req, res) => {
  res.send("API for Nuke");
});

app.use(routeHandler);
app.use(errorHandler);

app.listen(port,()=>{
  console.log(`App started on ${port}!`);
})