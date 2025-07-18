const dotenv = require('dotenv');
dotenv.config();
const express=require('express')
const connectDB = require('./db')
const studentRoutes=require('./routes/student.route')
const bookRoutes=require('./routes/books.route')
const app=express()


connectDB()
app.use(express.json())

app.listen(3030,()=>{
    console.log("Server running on 3030")
})

app.get('/',(req,res)=>{
    res.send("Hello World!!")
})

app.use('/student',studentRoutes)
app.use('/books',bookRoutes)
// app.use('/issue',issueRoutes)
