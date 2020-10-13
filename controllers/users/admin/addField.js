const Field = require('../../../models/Escenario_deportivo');

const addField = async (req, res) => {
    let {nombre, descrip, valor_hora, imagen} = req.body;
    var usuario_id = req.tokenInfo.id;
    let field = await Field.create({
        nombre,
        descrip,
        valor_hora,
        usuario_id,
        imagen
    })
    res.json({field});
}

module.exports = addField;
