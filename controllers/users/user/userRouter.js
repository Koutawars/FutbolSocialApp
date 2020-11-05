const express = require('express');
const router = express.Router();
const getFields = require('../any/getFields');
const searchUsers = require('./searchUsers');
const updateUser = require('./updateUser');

router.get('/getFields', getFields);
router.get('/searchUsers',searchUsers);
router.put('/updateUser/:id',updateUser);
module.exports = router;