const Usuario = require('../../../models/Usuario');
const Seguir = require('../../../models/Seguir');
const Post = require('../../../models/Post');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const getAllPost = async (req, res) => {
    let id_seguidor = req.tokenInfo.id;
    let result = await Post.findAll({
        include: [{
            model:Usuario,
            required: true,
            attributes: { exclude: ['password','correo','cedula','saldo','tipo_usuario_id'] },
            include:[{
                model: Seguir,
                    where:{
                        id_seguidor
                    },
                    attributes: { exclude: ['id','id_seguido','id_seguidor'] },
            }]

        }],
        order:[[ 'fecha', 'DESC']]
    }).catch(e=>{
        console.log(e);
    })
    res.json({result});
}

module.exports = getAllPost;