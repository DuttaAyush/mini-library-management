const mongoose=require("mongoose")

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLen:[5,"Please enter valid name"],
    },
    mobile:{
        type:Number,
        required:true,
    },
    rollNo:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
        enum:["M","F"]
    }
})

const studentModel=mongoose.model('student',studentSchema)
module.exports=studentModel