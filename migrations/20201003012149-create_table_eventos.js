'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("eventos", {
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
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("eventos");
  }
};
