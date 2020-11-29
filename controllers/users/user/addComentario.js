const Comentario = require('../../../models/Comentario');
const addComentario = async (req, res) => {
    let content = req.body.content;
    let {idpost} = req.params;
    var idUsuario = req.tokenInfo.id;
    let comentario = await Comentario.create({
        idpost,
        idUsuario,
        comentario:content
    })
    res.json({comentario});
}

module.exports = addComentario;