const express=require("express");
const mongoose=require("mongoose");
const router=require("./routes/book-routers")
const cors=require("cors")
const app=express()


app.use(express.json())
app.use(cors());
app.use("/books",router);











mongoose
.connect("mongodb+srv://admin:admin@cluster0.kacm6jg.mongodb.net/bookapp?retryWrites=true&w=majority")
.then(()=>console.log("connected to database"))
.then(()=>app.listen(5000))
.catch((err)=>console.log(err))