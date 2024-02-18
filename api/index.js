import express from 'express'

const app=express()

app.get('/',(req,res)=>{
    res.send({"status":"success"})
})

app.listen(3000,()=>{
    console.log("server started")
})