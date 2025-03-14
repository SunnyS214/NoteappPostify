const mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_URL)
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
