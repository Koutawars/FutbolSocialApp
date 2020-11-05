const Field = require('../../../models/Usuario');

const updateUser = async (req, res) => {
    let {id} = req.params;
    let {correo, password, imagen, cedula, nombres, apellidos} = req.body;
    let field;
    if(imagen){
        field = await Field.update({
            correo,
            password,
            imagen,
            cedula,
            nombres,
            apellidos
        }, {where: {id}});
    }else {
        field = await Field.update({
            correo,
            password,
            cedula,
            nombres,
            apellidos
        }, {where: {id}});
    }
    res.json({field});
}

module.exports = updateUser;