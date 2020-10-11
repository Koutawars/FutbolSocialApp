const Sequelize = require('sequelize');

module.exports = sequelize.define("Comentario", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    post_idpost: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    usuario_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comentario:{
        type: Sequelize.STRING,
        allowNull: false

    }
},
{
    tableName: 'comentarios'
    
});