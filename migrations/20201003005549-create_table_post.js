'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("posts", {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        imagen:{
          type:Sequelize.STRING(500000),
          allowNull:true
        },
        contenido:{
          type: Sequelize.STRING("1000"),
          allowNull: false
  
        },
        eventos_id: {
          type: Sequelize.INTEGER,
          allowNull : true
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("posts");
  }
};
