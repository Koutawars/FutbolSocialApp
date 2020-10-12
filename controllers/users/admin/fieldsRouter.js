const express = require('express');
const router = express.Router();

const getFields = require('../any/getFields');
const deleteField = require('./deleteField');
const addField = require('./addField');
const updateField = require('./updateField');

// [GET] http://localhost:5000/api/admin/field
router.get('/', getFields);

// [POST] http://localhost:5000/api/admin/field/add
router.post('/add', addField);

// [PUT] http://localhost:5000/api/admin/field/update/:id
router.put('/update/:id', updateField);

// [DELETE] http://localhost:5000/api/admin/field/delete/:id
router.delete('/delete/:id', deleteField);

module.exports = router;