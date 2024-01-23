const mongoose=require("mongoose")

const schema=mongoose.Schema;
const bookschema=new schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    availa:{
        type:Boolean,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("Book",bookschema)