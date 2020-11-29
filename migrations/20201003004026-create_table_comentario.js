'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("comentarios", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      post_idpost: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      idUsuario:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      comentario:{
        type: Sequelize.STRING,
        allowNull: false

      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("comentarios");
  }
};
