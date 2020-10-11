const Sequelize = require('sequelize');

module.exports = sequelize.define("Estado_evento", {
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
    },
    {
        tableName: 'estado_eventos'
});