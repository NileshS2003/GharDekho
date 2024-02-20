import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/User.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config(); 
const app = express();
app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)



/* To send brower defined errors  */
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode||500
  const message=err.message||"Internal server error"
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("server connected");
  })
  .catch((error) => {
    console.log(error);
  });


app.get("/", (req, res) => {
  res.send({ status: "success" });
});

app.listen(3000, () => {
  console.log("server started");
});
