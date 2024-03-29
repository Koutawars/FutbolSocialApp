const Seguir = require('../../../models/Seguir');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const deleteSeguir = async (req, res) => {
    let {id_seguido} = req.params;
    let id_seguidor = req.tokenInfo.id;
    let result = await Seguir.destroy({
        where: {
            [Op.and]: [{ id_seguido: {[Op.eq]: id_seguido  }}, { id_seguidor: {[Op.eq]:  id_seguidor }}]
        }
    })
    res.json({result});
}

module.exports = deleteSeguir;