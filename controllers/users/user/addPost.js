const Field = require('../../../models/Post');

const addPost = async (req, res) => {
    let {imagen, pie_post, eventos_id} = req.body;
    var usuario_id = req.tokenInfo.id;
    let field = await Field.create({
        usuario_id,
        imagen,
        pie_post,
        eventos_id
    })
    res.json({field});
}

module.exports = addPost;