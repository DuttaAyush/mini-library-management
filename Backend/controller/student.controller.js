const studentModel = require("../models/student.model");
const studentService = require("../services/student.service")

module.exports.addStudent=async (req,res,next)=>{
    console.log(req.body)
    const {name,mobile,rollNo,gender}=req.body

    if(await studentModel.findOne({rollNo})){
        return res.status(501).json({message:"Student Already added"})
    }

    const student=await studentService.addStudent({
        name:name,
        mobile:mobile,
        rollNo:rollNo,
        gender:gender,
    })

    res.status(201).json({
        student,message:"Student Added Successfully"
    })
}