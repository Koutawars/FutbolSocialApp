const Sequelize = require('sequelize');
const Usuario = require('../models/Usuario');
const CONSTANT = require('../config/constantServer');

let register = async (req, res) => {
    let correo = req.body.correo;
    let password = req.body.password;
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let cedula = req.body.cedula;
    let usuarioCreado = await Usuario.create({
        correo,
        password,
        nombres,
        apellidos,
        tipo_usuario_id: CONSTANT.USERID,
        saldo:0,
        cedula
    }).catch((err) => {
        console.log(err);
        res.status(401).send({
            error: 'Mal usuario'
        })
    });
    res.json({usuarioCreado});
}
module.exports = register;