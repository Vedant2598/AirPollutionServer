const axios=require("axios")
const { response } = require("express")
const dataModel=require("../models/Data")

const dotenv=require("dotenv")
dotenv.config()

const getDate=()=>{
    let date=new Date()
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
} 

const getTime=()=>{
    let date=new Date()
    let minutes=date.getMinutes()
    if(minutes<10 && minutes>=0){
        minutes="0"+date.getMinutes()
    }
    return `${date.getHours()}:${minutes}`
}

const fetchData=async()=>{
    try{

        let lat=18.530252
        let lon=73.849820
        
        await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`)
        .then(async(response)=>{
            data=response.data.list[0]
            date_=getDate()
            await dataModel.create({components:data.components,date:new Date,date_:getDate(),time:getTime()})
            
            // console.log(data.components)
            console.log("Scheduled",new Date())
        })
    }
    catch(e){
        console.log(e)
    }
}


// console.log(date.getDate(),date.getMonth(),date.getFullYear())
// console.log(date)
module.exports={fetchData}