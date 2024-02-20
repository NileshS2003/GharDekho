import express from "express";
import { signin } from "../controller/auth.controller.js";
// import { test } from "../controller/User.controller.js";

const router=express.Router()

router.post('/',signin).get('/',(req,res)=>{
    res.json("Nilesh")
})

export default router