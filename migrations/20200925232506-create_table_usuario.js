'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("usuarios", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      correo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cedula: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      saldo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tipo_usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nombres: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellidos: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("usuarios");
  }
};
