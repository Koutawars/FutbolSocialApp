const Field = require('../../../models/Seguir');

const deleteSeguir = async (req, res) => {
    let id_seguido = req.params;
    let id_seguidor = req.tokenInfo.id;
    let field = await Field.destroy({
        where: {
            [Op.and]: [{ id_seguido: {[Op.eq]: { [Op.col]: 'seguir.id_seguido'} }}, { id_seguidor: {[Op.eq]: { [Op.col]: 'seguir.id_seguidor'} }}]
        }
    })
    res.json({field});
}

module.exports = deleteSeguir;