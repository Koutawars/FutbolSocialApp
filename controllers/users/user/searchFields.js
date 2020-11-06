const Field = require('../../../models/Escenario_deportivo');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const searchFields = async (req, res) => {
    let text = req.query.q
    let field = await Field.findAll({
        
        where: {
            [Op.or]: [
                {nombre: {
                    [Op.substring]: text
                }}, 
                {valor_hora: {
                    [Op.lte]: text
                }}
            ]
        },
        attributes: { exclude: ['id','usuario_id'] }
    });
    console.log(text);
    res.json({field});
}

module.exports = searchFields;