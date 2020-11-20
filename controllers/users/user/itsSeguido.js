const Seguir = require('../../../models/Seguir');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const itsSeguido = async (req, res) => {
    let {id_seguido} = req.params;
    var id_seguidor = req.tokenInfo.id;
    let result = await Seguir.findOne({
        where:{
            [Op.and]: [{ id_seguido: {[Op.eq]: id_seguido  }}, { id_seguidor: {[Op.eq]:  id_seguidor }}]
        }
    })
    res.json({result});
    
}

module.exports = itsSeguido;