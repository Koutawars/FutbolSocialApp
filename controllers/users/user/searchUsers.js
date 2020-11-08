const Field = require('../../../models/Usuario');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const searchUsers = async (req, res) => {
    let text = req.query.q
    let results = await Field.findAll({
        where: {
            [Op.or]: [
                { nombres: {
                    [Op.substring]: text
                }}, 
                {apellidos: {
                    [Op.substring]: text
                }}
            ]
        },
        attributes: { exclude: ['password','correo','cedula','saldo','tipo_usuario_id'] }
    });
    res.json({results});
}

module.exports = searchUsers;