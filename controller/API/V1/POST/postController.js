const post = require("../../../../model/Post/Post");
const comment = require("../../../../model/comments/comments");
module.exports.addPost = async(req,res)=>{
 try{
    let ckackposttitle = await post.findOne({post_Title : req.body.post_Title})
    if(!ckackposttitle){
        let imgpath = '';
        if(req.file){
            imgpath = await post.imagePath+'/'+req.file.filename;
        }
        req.body.post_image = imgpath;
        let postdata = await post.create(req.body);
        if(postdata){
            return res.status(200).json({ mes: 'Post is inserted', status: 1 });
        }
        else{
            return res.status(200).json({ mes: 'Post is not inserted', status: 0 });
        }
    }
    else{
        return res.status(200).json({ mes: 'Post is allredy add please add difrent post', status: 0 });
    }
 }
 catch(err){
    return res.status(400).json({ mes: 'Post is not foun', status: 0 });
 }
}

// view post and commmebt
module.exports.viewpost = async(req,res)=>{
   try{
       let viewpost = await post.findById(req.params.id).populate('commentids').exec();

        if(viewpost){
            const commentCount = viewpost.commentids.length;
            return res.status(200).json({ mes: 'Post and comment is hear', status: 1 ,pd:viewpost,commentCount});
        }
        else{
            return res.status(200).json({ mes: 'Post and comment is not found', status: 0});
        }
   }
   catch(err){
        return res.status(400).json({ mes: 'somthin went wrong', status: 0 });
   }

}