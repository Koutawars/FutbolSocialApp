const express = require('express');
const router = express.Router();
const field = require('./fieldsRouter');

router.use('/field', field);

module.exports = router;