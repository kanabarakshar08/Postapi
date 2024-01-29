const mongoose = require('mongoose');


const CommentSchema = mongoose.Schema({
    add_comment: {
        type: String,
    },
    postids:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',
        required:true
    }
})




const comment = mongoose.model('comment', CommentSchema);
module.exports = comment;