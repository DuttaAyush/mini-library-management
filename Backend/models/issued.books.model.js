const mongoose=require('mongoose')

const issuedSchema=mongoose.Schema({
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    issuer:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
})

const issuedBookModel=mongoose.model("issued",issuedSchema)

module.exports=issuedBookModel