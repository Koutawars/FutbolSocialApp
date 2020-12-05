var jwt = require('jsonwebtoken');
var Sequelize = require('sequelize');
const CONSTANT = require('../../config/constantServer');

const Usuario = require('../../models/Usuario');
const Op = Sequelize.Op;
var login = async (req, res) => {

    // req.body
    var correo = req.body.correo;
    var password = req.body.password;
    var buscado;
    try {
      buscado = await Usuario.findOne({
        where: {
          [Op.and]:[
            {
              correo
            },
            {
              password
            }
          ]
        }
        })
    }catch(err){
        console.error("Error: ", err);
    }
    if(!buscado){
      res.status(401).send({
        error: 'Usuario o contraseña inválidos'
      })
      return
    }
    var tokenData = {
        id: buscado.id,
        nombres: buscado.nombres,
        apellidos: buscado.apellidos,
        tipoId: buscado.tipo_usuario_id,
        correo: correo,
        cedula: buscado.cedula,
        saldo: buscado.saldo
        // MAS DATOS...
    }
    var token = jwt.sign(tokenData, CONSTANT.TOKENENCRIPTED, {
      expiresIn: "10d" // 10 dias
    })
    res.json({ jwt: token, usuario: tokenData});
};

module.exports = login;