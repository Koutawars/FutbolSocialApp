const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('./security/auth');
const control = require('./security/control');

// autenticación
const register = require('./register');
const login = require('./security/login');

const CONSTANT = require('../config/constantServer');

// router usuarios
const routerUser = require('./users/user/userRouter');
const routerAdmin = require('./users/admin/adminRouter')

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

router.use(control([CONSTANT.ADMIID, CONSTANT.USERID]));
// acceso solo para administrador y usuarios normales
router.use('/user', routerUser);

router.use(control([CONSTANT.ADMIID]));
// acceso solo a administrador
router.use('/admin', routerAdmin);

module.exports = router;