const Post = require('../../../models/Post');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const deletePost = async (req, res) => {
    let {id} = req.params;
    let usuario_id = req.tokenInfo.id;
    let result = await Post.destroy({
        where: {
             id ,  usuario_id
        }
    })
    res.json({result});
}

module.exports = deletePost;