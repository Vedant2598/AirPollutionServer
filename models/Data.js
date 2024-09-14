const mongoose=require("mongoose")


const dataSchema=mongoose.Schema({
    components: Object,
    date:Date,
    date_:String,
    time:String
})

const dataModel= mongoose.model("Data",dataSchema)

module.exports=dataModel