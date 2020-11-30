const Alquiler = require('../../../models/Alquiler');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const AlquilerResult = async (req, res) => {
    let {escenario_deportivo_id} = req.params;
    let {fecha_inicio, fecha_final} = req.body;
    let alquiler = await Alquiler.findOne({
        where:{
            [Op.And]:[{[Op.between]: [fecha_inicio , fecha_final]} , escenario_deportivo_id]
        }

    });
    res.json({alquiler});
}

module.exports = AlquilerResult;