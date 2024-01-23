const express=require("express");
const router=express.Router()
const Book=require("../model/model");
const bookController=require("../controllers/book-controller")

router.get("/",bookController.getAllBooks)
router.get("/:id",bookController.getBookById)
router.post("/",bookController.addBooks)
router.put("/:id",bookController.updateBook)
router.delete("/:id",bookController.deleteById)
module.exports=router;