const Field = require('../../../models/Seguir');

const seguirUsuario = async (req, res) => {
    let {id} = req.body;
    var id_seguidor = req.tokenInfo.id;
    let result = await Field.create({
        id_seguido:id,
        id_seguidor
    })
    res.json({result});
}

module.exports = seguirUsuario;