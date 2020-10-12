const express = require('express');
const router = express.Router();
const getFields = require('../any/getFields');

router.get('/getFields', getFields);

module.exports = router;