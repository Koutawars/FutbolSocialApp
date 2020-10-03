const Sequelize = require('sequelize');

module.exports = sequelize.define("estado_alquiler", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      }
});