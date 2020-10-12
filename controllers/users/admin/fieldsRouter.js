const express = require('express');
const router = express.Router();
const getFields = require('../any/getFields');

// [Get]
router.get('/', getFields);

module.exports = router;