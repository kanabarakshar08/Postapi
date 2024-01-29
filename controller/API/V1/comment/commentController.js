const comment = require("../../../../model/comments/comments");
const post = require("../../../../model/Post/Post");

module.exports.add_comment = async(req,res)=>{
  console.log(req.body)
  try{
        console.log(req.body);
        console.log(req.body.post_id);
        req.body.postids = req.body.post_id;
        let commentdata = await comment.create(req.body);
        if(commentdata){
            let postdata = await post.findById(req.body.post_id);
            postdata.commentids.push(commentdata.id);
            await post.findByIdAndUpdate(req.body.post_id,postdata);
            return res.status(200).json({ mes: 'Comment is add in post', status: 1 });
        }
        else{
            return res.status(200).json({ mes: 'Comment is add not in post', status: 0 });
        }
  }
  catch(err){
    return res.status(400).json({ mes: 'Comment not found', status: 0 });
  }
}




