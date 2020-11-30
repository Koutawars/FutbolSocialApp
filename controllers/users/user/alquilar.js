const Alquiler = require('../../../models/Alquiler');

const addPost = async (req, res) => {
    let {escenario_deportivo_id} = req.params;
    let {fecha_inicio, fecha_final,precio} = req.body;
    let estado_alquiler_id = 0;
    var usuario_id = req.tokenInfo.id;
    let alquiler = await Alquiler.create({
        fecha_inicio,
        escenario_deportivo_id,
        usuario_id,
        fecha_final,
        precio,
        estado_alquiler_id
    })
    res.json({alquiler});

    
}

module.exports = addPost;