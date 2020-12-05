const Field = require('../../../models/Usuario');

const cobrarAlquiler = async (req, res) => {
    let id =  req.tokenInfo.id;
    let {resta_saldo} =req.params;
    let field;
    field = await Field.update({
        saldo=saldo-resta_saldo
    }, {where: { [Op.and]: [{ id }, { saldo:{[Op.eq]: resta_saldo} }]}

    });
    
    res.json({field});
}

module.exports = cobrarAlquiler;