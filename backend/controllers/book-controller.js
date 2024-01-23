const Book=require("../model/model");

const getAllBooks=async (req,res,next)=>{
    let books;
    try{
        books=await Book.find();
    }catch(err){
        console.log(err);
    }

    if(!books)
    return res.status(404).json({message:"No product"})
    else
    return res.status(200).json({books})
}

const addBooks=async (req,res,next)=>{
    let book;
    const {name,author,desc,price,availa,image}=req.body;
    try{
        book=new Book({
            name,author,desc,price,availa,image
        })
        await book.save();
    }
    catch(err){
        console.log(err)
    }
    if(!book)
    return res.status(404).json({message:"Unable to add"})
    else
    return res.status(200).json({book})
}



const getBookById=async (req,res,next)=>{
    let book;
    const id=req.params.id;
    try{
        book=await Book.findById(id);
    }catch(err){
        console.log(err)
    }
    if(!books)
    return res.status(404).json({message:"Not exist"})
    else
    return res.status(200).json({book})

}


const updateBook=async (req,res,next)=>{
    const id=req.params.id;
    const {name,author,desc,price,availa,image}=req.body;
    let book;
    try{
        book=await Book.findByIdAndUpdate(id,{
            name,author,desc,price,availa,image
        });
        book=await book.save();

    }catch(err){
        console.log(err)
    }
    if(!book)
    return res.status(404).json({message:"unable to update"})
    else
    return res.status(200).json({book})
     
}

const deleteById=async (req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
        book=await Book.findOneAndDelete(id);
        
    }catch(err){
        console.log(err)
    }
    if(!book)
    return res.status(404).json({message:"unable to delete"})
    else
    return res.status(200).json({message:"deleted successfully"})
}



exports.getAllBooks=getAllBooks;
exports.addBooks=addBooks;
exports.getBookById=getBookById;
exports.updateBook=updateBook;
exports.deleteById=deleteById;