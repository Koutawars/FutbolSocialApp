const Sequelize = require('sequelize');

module.exports = sequelize.define("Usuario_has_evento", {
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false
 
      },
      eventos_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
});