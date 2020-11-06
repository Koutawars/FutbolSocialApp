const Post = require('../../../models/Post');
const Usuario = require('../../../models/Usuario');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const getPostUsuario = async (req, res) => {
    let {id} = req.params;
    let usuario = await Usuario.findOne({
        where:{
            id
        },
        include: Post,
        attributes: { exclude: ['password','correo','cedula','saldo','tipo_usuario_id'] }
    });
    res.json({usuario});
}

module.exports = getPostUsuario;