const Field = require('../../../models/Seguir');

const seguirUsuario = async (req, res) => {
    let {id_seguido} = req.params;
    var id_seguidor = req.tokenInfo.id;
    let field = await Field.create({
        id_seguido,
        id_seguidor
    })
    res.json({field});
}

module.exports = seguirUsuario;