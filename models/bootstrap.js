const Sequelize = require('sequelize');
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

    var dateFake = true;
    if(dateFake){
        /*
        var administrador = await Tipo_usuarios.create({tipo:"administrador"});
        var userAdmin = await Usuario.create({
            correo:"admin@gmail.com",
            password: "admin",
            cedula: 12345,
            saldo: 999999,
            tipo_usuario_id: administrador.id,
            nombres: "Carlos Miguel",
            apellidos: "Campo"
        });
        console.log(userAdmin);
       let admis = await Tipo_usuarios.findAll({
           where: {
               id: 1
           },
           include: [
               {
                   model: Usuario
               }
           ]
       });
        */
    }

    const errHandler = (err) => {
        console.error("Error: ", err);
    };
    
};