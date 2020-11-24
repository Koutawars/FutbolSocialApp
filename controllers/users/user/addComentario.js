const Comentario = require('../../../models/Comentario');

const addComentario = async (req, res) => {
    let comentario = req.body.comentario
    let {post_idpost} = req.params;
    var usuario_id = req.tokenInfo.id;
    let comentrarioC = await Comentario.create({
        post_idpost,
        usuario_id,
        comentario
    })
    res.json({comentrarioC});

    
    
}

module.exports = addComentario;