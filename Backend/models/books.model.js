const mongoose=require('mongoose')

const bookSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        enum:["Available","Issued"],
        default:"Available"
    },
    qty:{
        total:{
            type:Number,
        },
        available:{
            type:Number,
            // default:this.qty.total,
        },
    }
})

const bookModel=mongoose.model('book',bookSchema)
module.exports=bookModel