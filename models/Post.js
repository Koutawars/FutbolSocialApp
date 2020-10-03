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
        type: Sequelize.BLOB("long"),
        allowNull: true
      },
      pie_post:{
        type: Sequelize.STRING("1000"),
        allowNull: false

      },
      eventos_id: {
        type: Sequelize.INTEGER,
        allowNull : false
      }
});