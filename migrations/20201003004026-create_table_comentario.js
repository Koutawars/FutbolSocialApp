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
      usuario_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      comentario:{
        type: Sequelize.STRING,
        allowNull: false

      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("comentarios");
  }
};
