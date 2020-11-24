const express = require('express');
const router = express.Router();
const getFields = require('../any/getFields');
const searchUsers = require('./searchUsers');
const updateUser = require('./updateUser');
const searchFields = require('./searchFields');
const seguirUsuario = require('./seguirUsuario');
const addPost = require('./addPost');
const getPostUsuario = require('./getPostUsuario');
const deleteSeguir = require('./deleteSeguir');
const itsSeguido = require('./itsSeguido');
const getPostAllUsers = require('./getPostAllUsers');
const deletePost = require('./deletePost');
const addComentario = require('./addComentario');
const getPostAndComenst = require('./getPostAndComenst');

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
router.post('/seguirUsuario/:id_seguido',seguirUsuario);

// [POST] http://localhost:5000/api/user/addPost
router.post('/addPost',addPost);
// [DELETE] http://localhost:5000/api/user/deleteSeguir
router.delete('/deleteSeguir/:id_seguido',deleteSeguir);

// [get] http://localhost:5000/api/user/itsSeguido
router.get('/itsSeguido/:id_seguido',itsSeguido);

// [get] http://localhost:5000/api/user/getPostAllUsers
router.get('/getPostAllUsers',getPostAllUsers);

// [DELETE] http://localhost:5000/api/user/deletePost
router.delete('/deletePost/:id',deletePost);

// [POST] http://localhost:5000/api/user/addComentario
router.post('/addComentario/:post_idpost',addComentario);

// [get] http://localhost:5000/api/user/getPostAndComenst
router.get('/getPostAndComenst/:post_idpost',getPostAndComenst);


module.exports = router;