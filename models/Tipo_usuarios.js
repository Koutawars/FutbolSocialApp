const Sequelize = require('sequelize');

module.exports = sequelize.define("Tipo_usuario", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'tipo_usuarios'
  });