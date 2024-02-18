import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("server connected");
  })
  .catch((error) => {
    console.log(error);
  });

// async function main(){
//     try {
//         await mongoose.connect(process.env.MONGO)
//         console.log("server connected")
//     } catch (error) {
//         console.log(error)
//     }
// }

// main().catch()
const app = express();

app.get("/", (req, res) => {
  res.send({ status: "success" });
});

app.listen(3000, () => {
  console.log("server started");
});
