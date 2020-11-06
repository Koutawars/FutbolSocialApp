const express = require('express');
const router = express.Router();
const getFields = require('../any/getFields');
const searchUsers = require('./searchUsers');
const updateUser = require('./updateUser');
const searchFields = require('./searchFields');
const seguirUsuario = require('./seguirUsuario');
const addPost = require('./addPost');
const getPostUsuario = require('./getPostUsuario');

//  [GET] http://localhost:5000/api/user/getFields
router.get('/getFields', getFields);

//  [GET] http://localhost:5000/api/user/searchUsers
router.get('/searchUsers',searchUsers);

//  [GET] http://localhost:5000/api/user/searchFields
router.get('/searchFields', searchFields);

//  [GET] http://localhost:5000/api/user/getPostUsuario
router.get('/getPostUsuario/:id',getPostUsuario);

//  [PUT] http://localhost:5000/api/user/updateUser
router.put('/updateUser',updateUser);

// [POST] http://localhost:5000/api/user/seguirUsuario
router.post('/seguirUsuario',seguirUsuario);

// [POST] http://localhost:5000/api/user/addPost
router.post('/addPost',addPost);


module.exports = router;