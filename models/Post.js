const Sequelize = require('sequelize');

module.exports = sequelize.define("Post", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imagen:{
        type:Sequelize.STRING(500000),
        allowNull:true
      },
      contenido:{
        type: Sequelize.STRING("1000"),
        allowNull: false

      },
      eventos_id: {
        type: Sequelize.INTEGER,
        allowNull : true
      },
      fecha:{
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    },
    {
        tableName: 'posts'
});