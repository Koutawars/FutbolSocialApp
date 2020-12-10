const Usuario = require('../../../models/Usuario');

const recargar = async (req, res) => {
    let id =  req.tokenInfo.id;
    let saldo = req.body.saldo; 
    let usuario = await Usuario.findOne({
        where: { 
            id 
        }
    });
    usuario.saldo = usuario.saldo+parseInt(saldo);
    usuario.save();
    res.json({usuario});
}

module.exports = recargar;