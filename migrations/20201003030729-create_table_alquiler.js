'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("alquileres", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      fecha_inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      escenario_deportivo_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fecha_final: {
        type: Sequelize.DATE,
        allowNull: false
      },
      precio: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      estado_alquiler_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("alquileres");
  }
};
