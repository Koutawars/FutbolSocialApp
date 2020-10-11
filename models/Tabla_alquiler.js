const Sequelize = require('sequelize');

module.exports = sequelize.define("Tabla_alquiler", {
    eventos_id: {
        type: Sequelize.INTEGER,
        allowNull: false
 
      },
      alquiler_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
    {
        tableName: 'tabla_alquileres'
});