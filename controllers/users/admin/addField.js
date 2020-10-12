const Field = require('../../../models/Escenario_deportivo');

const addField = async (req, res) => {
    let {nombre, descrip, valor_hora} = req.body;
    let field = await Field.create({
        nombre,
        descrip,
        valor_hora
    })
    res.json({field});
}

module.exports = addField;
