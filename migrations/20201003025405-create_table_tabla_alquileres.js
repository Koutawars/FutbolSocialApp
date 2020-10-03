'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tabla_alquileres", {
      eventos_id: {
        type: Sequelize.INTEGER,
        allowNull: false
 
      },
      alquiler_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tabla_alquileres");
  }
};
