const Field = require('../../../models/Escenario_deportivo');

const deleteField = async (req, res) => {
    let {id} = req.params;
    let field = await Field.destroy({
        where: {
            id
        }
    })
    res.json({field});
}

module.exports = deleteField;
