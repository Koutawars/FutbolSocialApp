const Usuario = require('../../../models/Usuario');

const updateUser = async (req, res) => {
    let id =  req.tokenInfo.id;
    let saldoA = req.body.saldoA; 
    let usuario = await Usuario.findOne({
        where: { 
            id 
        }

    });
    usuario.saldo = usuario.saldo+saldoA ;
    usuario.save();
    res.json({usuario});
}

module.exports = updateUser;