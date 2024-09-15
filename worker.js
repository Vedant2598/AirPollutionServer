const cron=require("node-cron")
const connectDB=require("./config/Database")
const { fetchData } = require("./controller/Fetchdata")
const dotenv=require("dotenv")
dotenv.config()

connectDB()
.then(()=>{
    try{

        cron.schedule("0 12 * * *",async()=>{
            await fetchData()
        })

        cron.schedule("0 18 * * *",async()=>{
            await fetchData()
        })

        cron.schedule("0 23 * * *",async()=>{
            await fetchData()
        })

        cron.schedule("0 3 * * *",async()=>{
            await fetchData()
        })

    }catch(e){
        console.log(e)
    }
}).catch((e)=>{
    console.log(e)
})