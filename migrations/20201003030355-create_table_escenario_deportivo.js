'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("escenario_deportivo", {
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
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("escenario_deportivo");
  }
};
