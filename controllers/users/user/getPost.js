const Post = require('../../../models/Post');
const Usuario = require('../../../models/Usuario');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const getPost = async (req, res) => {
    let {id} = req.params;
    let usuario = await Usuario.findOne({
        where:{
            id
        },
        include: Post
    });
    res.json({usuario});
}

module.exports = getPost;