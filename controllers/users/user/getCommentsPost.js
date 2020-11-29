const Usuario = require('../../../models/Usuario');
const Comentario = require('../../../models/Comentario');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const getCommentsPost = async (req, res) => {
    let {idPost} = req.params;

    let comentarios = await Comentario.findAll({
        where: {
            post_idpost:idPost
        },
        include: [{
            model: Usuario,
            attributes: { exclude: ['password','correo','cedula','saldo','tipo_usuario_id'] }
        }],
        order:[['fecha', 'DESC']]
    }).catch((err) => {
        console.log(err);
    })
    res.json({comentarios});
}

module.exports = getCommentsPost;