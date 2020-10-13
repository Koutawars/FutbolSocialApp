const Sequelize = require('sequelize');

module.exports = sequelize.define("Escenario_deportivo", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descrip: {
        type: Sequelize.STRING,
        allowNull: false
      },
      valor_hora:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      imagen:{
        type:Sequelize.STRING(500000),
        allowNull:true
      },
      usuario_id:{
        type: Sequelize.INTEGER,
        allowNull:false
      }
    },
    {
      tableName: 'escenarios_deportivos'
});