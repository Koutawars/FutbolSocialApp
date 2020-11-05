const Field = require('../../../models/Usuario');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const searchUsers = async (req, res) => {
    let text = req.query.q
    let field = await Field.findAll({
        
        where: {
            nombres: {
                 [Op.substring]: text
            }
        },
        attributes: { exclude: ['password','correo','cedula','saldo','tipo_usuario_id'] }
    });
    console.log(text);
    res.json({field});
}

module.exports = searchUsers;