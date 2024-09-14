const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()


const connectDatabase=async()=>{

    await mongoose.connect(`${process.env.DATABASE_URL}`)
    .then((response)=>{
        console.log("Mongodb runned")
    }).catch((e)=>{
        console.log(e)
    })
}

module.exports=connectDatabase