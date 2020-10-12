const Field = require('../../../models/Escenario_deportivo');

const getFields = async (req, res) => {
    let fields = await Field.findAll();
    res.json({fields});
}

module.exports = getFields;
