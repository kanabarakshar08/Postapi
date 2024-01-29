const mongoose = require('mongoose');
const multer = require('multer');

const imagePath = "/uploades/Post";
const path = require('path');

const PostSchema = mongoose.Schema({
    post_Title: {
        type: String,
    },
    description: {
        type: String,
    },     
    post_image: {
        type : String
    },
    commentids :{
        type:Array,
        ref:'comment',
    }
})

const ImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../..", imagePath));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now());
    }
})

PostSchema.statics.uploadImage = multer({ storage: ImageStorage }).single("post_image");
PostSchema.statics.imagePath = imagePath;

const post = mongoose.model('Post', PostSchema);
module.exports = post;