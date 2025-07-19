const express=require('express')
const studentController = require('../controller/student.controller')
const router=express.Router()


router.post("/register",studentController.addStudent)



module.exports=router