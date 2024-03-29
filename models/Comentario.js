const Sequelize = require('sequelize');

module.exports = sequelize.define("Comentario", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    idpost: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idUsuario:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comentario:{
        type: Sequelize.STRING,
        allowNull: false

    },
    fecha: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
},
{
    tableName: 'comentarios'
    
});