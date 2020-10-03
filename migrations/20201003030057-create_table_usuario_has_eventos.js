'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("usuario_has_eventos", {
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false
 
      },
      eventos_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("usuario_has_eventos");
  }
};
