const Usuario = require('../../../models/Usuario');
const Comentario = require('../../../models/Comentario');
const Post = require('../../../models/Post');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const getPostAndComent = async (req, res) => {
    let {post_idpost} = req.params;
    
    let result = await Post.findAll({
        include: [{
            model:Comentario,
            //required: true,
            //attributes: { exclude: ['password','correo','cedula','saldo','tipo_usuario_id'] },
            where:{
                post_idpost
            },
            include:[{
                model: Usuario,
                required: true,
                attributes: { exclude: ['password','correo','cedula','saldo','tipo_usuario_id'] },
                    //attributes: { exclude: ['id','id_seguido','id_seguidor'] },
            }]

        }]
        //order:[[ 'fecha', 'DESC']]
    }).catch(e=>{
        console.log(e);
    })
    res.json({result});
}

module.exports = getPostAndComent;