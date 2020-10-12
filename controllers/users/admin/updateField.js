const Field = require('../../../models/Escenario_deportivo');

const updateField = async (req, res) => {
    let {id} = req.params;
    let {nombre, descrip, valor_hora} = req.body;
    let field = await Field.update({
        nombre,
        descrip,
        valor_hora
    }, {where: {id}});
    res.json({field});
}

module.exports = updateField;
