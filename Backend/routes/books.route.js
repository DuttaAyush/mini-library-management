const express=require('express')
const router=express.Router()
const bookController=require("../controller/books.controller")

router.post('/addnew',bookController.addBook)
router.get('/getavailable',bookController.getAvailableBooks)
router.post('/issuebook',bookController.issueBook)
router.post('/return',bookController.returnBook)


module.exports=router