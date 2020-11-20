const Post = require('../../../models/Post');

const addPost = async (req, res) => {
    let {imagen, contenido, eventos_id} = req.body;
    var usuario_id = req.tokenInfo.id;
    if(contenido || imagen){
        let post = await Post.create({
            usuario_id,
            imagen,
            contenido,
            eventos_id
        })
        res.json({post});

    }else{
        res.status(400);
    }
    
}

module.exports = addPost;