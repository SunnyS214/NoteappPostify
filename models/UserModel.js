const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/noteapp1march25")
const UserSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }]  
})

module.exports=mongoose.model("User",UserSchema)
