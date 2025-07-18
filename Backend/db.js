const mongoose=require('mongoose')
function connectDB(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{
        console.log("Connected to Database",process.env.DB_CONNECT)
    }).catch((err)=>{
        console.log("Error connecting to MongoDB ",err)
    })
}

module.exports=connectDB
