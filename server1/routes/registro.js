const express = require('express');
const router = express.Router();
const {validateCreate} = require('./../middlewares/personas');
const { create } = require('../controllers/registro');






router.post('/',validateCreate, create);

module.exports = router;