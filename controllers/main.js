var express = require('express');
var router = express.Router();
let auth = require('./security/auth');
let login = require('./security/login');
let register = require('./register');

// ruta libre, login
router.post('/login', login);
// [POST] http://localhost:5000/api/login 
// Retorna el token

// [POST] http://localhost:5000/api/register 
router.post('/register', register);

// usar el middleware
router.use(auth);

router.post('/auth', (req, res) => {
    res.json(req.tokenInfo);
});

module.exports = router;