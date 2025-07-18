const studentModel = require("../models/student.model");

module.exports.addStudent=async({
    name,mobile,rollNo,gender
})=>{
    if(!name || !mobile || !rollNo || !gender){
        throw new Error("All Fields are required.....")
    }

    const student=studentModel.create({
        name,
        mobile,
        rollNo,
        gender
    })

    return student
}