const Field = require('../../../models/Escenario_deportivo');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const searchFields = async (req, res) => {
    let text = req.query.q
    let results = await Field.findAll({
        
        where: {
            [Op.or]: [
                {nombre: {
                    [Op.substring]: text
                }}, 
                {valor_hora: {
                    [Op.lte]: text
                }}
            ]
        }
    });
    res.json({results});
}

module.exports = searchFields;