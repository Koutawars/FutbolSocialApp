
const Alquiler = require('../../../models/Alquiler');
const Usuario = require('../../../models/Usuario');
const Field = require('../../../models/Escenario_deportivo');
const Sequelize = require('Sequelize');
var moment = require('moment');
const Op = Sequelize.Op;

const AlquilerResult = async (req, res) => {
    let {id} = req.params;
    let escenario_deportivo_id = id;
    let fecha_inicio=moment(req.body.fecha_inicio );
    let fecha_final=moment(req.body.fecha_final);
    let alquiler1 = await Alquiler.findOne({
        where:{
            [Op.or]:[
                {fecha_inicio:{ [Op.between]:[fecha_inicio, fecha_final]}},
                {fecha_final:{ [Op.between]:[fecha_inicio , fecha_final]}}],
                escenario_deportivo_id

        } 

    });
    if(alquiler1 == null){
        let field = await Field.findOne({
            where: {
                id
            }
        });
        let escenario_deportivo_id = id;
        id =  req.tokenInfo.id;
        var duration = moment.duration(fecha_final.diff( fecha_inicio));
        var hours = duration.asHours();
        console.log(hours);
        let precio = field.valor_hora * hours;
        precio = Math.trunc(precio) + 1;
        let usuario = await Usuario.findOne({
            where: { 
                id 
            }
    
        });
        let saldo = usuario.saldo;
        console.log(saldo);
        if(saldo >= precio){
            usuario.saldo = usuario.saldo - precio;
            usuario.save();
            let estado_alquiler_id = 0;
            var usuario_id = id;
            let alquiler = await Alquiler.create({
                fecha_inicio,
                escenario_deportivo_id,
                usuario_id,
                fecha_final,
                precio,
                estado_alquiler_id
            })
            res.json({alquiler, saldoActual: usuario.saldo});
        }else{
            res.status(402).send('¡Falta de creditos!');
        }
    }else{
        res.status(400 ).send('¡Cancha ocupada en ese rango fechas!');
    }
}

module.exports = AlquilerResult;
