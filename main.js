const express=require("express")
const app=express()
const server=require("http").createServer(app)
const cron=require("node-cron")
const dotenv=require("dotenv")
const connectDB=require("./config/Database")
const {fetchData}=require("./controller/Fetchdata")
dotenv.config()

cron.schedule("0 3 * * *",()=>{
    fetchData()
})

cron.schedule("0 7 * * *",()=>{
    fetchData()
})

cron.schedule("0 13 * * *",()=>{
    fetchData()
})

cron.schedule("0 18 * * *",()=>{
    fetchData()
})

cron.schedule("0 22 * * *",()=>{
    fetchData()
})

connectDB().then(()=>{
    server.listen(5000,()=>{
        console.log("server running on http://192.168.0.100:3000")
    }) 
})
