const Sequelize = require('sequelize');

module.exports = sequelize.define("Evento", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      inicio: {
        type: Sequelize.DATE,
        allowNull: true
      },
      final: {
        type: Sequelize.DATE,
        allowNull: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false

      },
      estado_evento_id: {
        type: Sequelize.INTEGER,
        allowNull : false
      }
});