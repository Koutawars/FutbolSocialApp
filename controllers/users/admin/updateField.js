const Field = require('../../../models/Escenario_deportivo');

const updateField = async (req, res) => {
    let {id} = req.params;
    let {nombre, descrip, valor_hora, imagen} = req.body;
    let field;
    if(imagen){
        field = await Field.update({
            nombre,
            descrip,
            valor_hora,
            imagen
        }, {where: {id}});
    }else {
        field = await Field.update({
            nombre,
            descrip,
            valor_hora
        }, {where: {id}});
    }
    res.json({field});
}

module.exports = updateField;
