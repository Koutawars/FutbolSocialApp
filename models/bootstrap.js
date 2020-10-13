const Sequelize = require('sequelize');
const CONSTANT = require('../config/constantServer');
module.exports = async () => {
    const Alquiler = require('./Alquiler');
    const Comentario = require('./Comentario');
    const Escenario_deportivo = require('./Escenario_deportivo');
    const Estado_alquiler = require('./Estado_alquiler');
    const Estado_evento = require('./Estado_evento');
    const Evento = require('./Evento');
    const Post = require('./Post');
    const Tabla_alquiler = require('./Tabla_alquiler');
    const Tipo_usuarios = require('./Tipo_usuarios');
    const Usuario_has_evento = require('./Usuario_has_evento');
    const Usuario = require('./Usuario');

    Tipo_usuarios.hasMany(Usuario, { foreignKey: 'tipo_usuario_id'});

    Usuario.hasMany(Comentario, {foreignKey:'usuario_id'});

    Usuario.hasMany(Escenario_deportivo, {foreignKey:'usuario_id'});

    Usuario.hasMany(Post, { foreignKey:'usuario_id'});

    Usuario.hasMany(Usuario_has_evento, { foreignKey:'usuario_id'});

    Usuario.hasMany(Alquiler, { foreignKey: 'usuario_id'});

    Estado_alquiler.hasMany(Alquiler, {foreignKey: 'estado_alquiler_id'});

    Escenario_deportivo.hasMany(Alquiler, { foreignKey: 'escenario_deportivo_id'});

    Alquiler.hasMany(Tabla_alquiler,{ foreignKey: 'alquiler_id'} );

    Estado_evento.hasMany(Evento, {foreignKey: 'estado_evento_id'});

    Evento.hasMany(Tabla_alquiler, {foreignKey: 'eventos_id'});

    Evento.hasMany(Post, {foreignKey: 'eventos_id'});

    Evento.hasMany(Usuario_has_evento, {foreignKey: 'eventos_id'});

    Post.hasMany(Comentario, {foreignKey: 'post_idpost'});

    let dateFake = false;
    if(dateFake){
        let administrador = await Tipo_usuarios.create({tipo:"administrador"});
        let userAdmin = await Usuario.create({
            correo:"admin@gmail.com",
            password: "admin",
            cedula: 12345,
            saldo: 999999,
            tipo_usuario_id: administrador.id,
            nombres: "Carlos Miguel",
            apellidos: "Campo"
        });
        let normal = await Tipo_usuarios.create({tipo:"Usuario normal"});
        let userNormal = await Usuario.create({
            correo: "persona@normal.com",
            password: "123456",
            cedula: 123456,
            saldo: 0,
            tipo_usuario_id: normal.id,
            nombres: "Anderson",
            apellidos: "Hernandez"
        });
        let cancha = await Escenario_deportivo.create({
            usuario_id: userAdmin.id,
            nombre: "Cancha El Pando",
            descrip: "En la 34 con cra 13, hay computadores para jugar a futbol",
            valor_hora: 50000
        })

    }

    const errHandler = (err) => {
        console.error("Error: ", err);
    };
    
};