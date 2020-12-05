const Field = require('../../../models/Escenario_deportivo');

const addField = async (req, res) => {
    let {id} = req.params;
    let field = await Field.findOne({
        where: {
            id
        }
    })
    res.json({field});
}

module.exports = addField;
