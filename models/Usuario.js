const Sequelize = require('sequelize');

module.exports = sequelize.define("Usuario", {
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
  },imagen:{
    type:Sequelize.STRING(500000),
    allowNull:true
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
},
{
  tableName: 'usuarios'
});
