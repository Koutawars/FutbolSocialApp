// middleware
var control = (grado) => {
    return (req, res, next) => {
        let usuarioId = req.tokenInfo.tipoId;
        let permiso = grado.find(id => usuarioId == id);
        if(permiso) {
            next();
        }else {
            res.status(401).send({
                error: 'Sin autorización.'
            })
            return;
        }
    };
}

module.exports = control;