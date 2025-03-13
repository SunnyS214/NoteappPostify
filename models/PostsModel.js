const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }, 
    
Likes:[ {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'  
    }],

    Date: {
        type: Date,
        default: Date.now
    }       
 });
module.exports = mongoose.model("Post", PostSchema)