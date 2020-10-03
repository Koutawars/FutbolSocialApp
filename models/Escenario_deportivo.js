const Sequelize = require('sequelize');

module.exports = sequelize.define("Escenario_deportivo", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      lugar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      valor_hora:{
        type: Sequelize.INTEGER,
        allowNull:false
      }
});