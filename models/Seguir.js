const Sequelize = require('sequelize');

module.exports = sequelize.define("Seguir", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      id_seguido: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_seguidor: {
        type: Sequelize.INTEGER,
        allowNull : false
      }
    },
    {
        tableName: 'seguir'
});