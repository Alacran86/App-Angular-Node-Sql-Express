const express = require("express");
const router = express.Router();
const {all, single, create, modify} = require('./../controllers/productos');
const {validateCreate, validateModify} = require('./../middlewares/productos');

router.get('/all', all);
router.get('/single/:id', single);
router.post('/new',validateCreate, create);
router.put('/modify/:id',validateModify, modify);

module.exports = router;