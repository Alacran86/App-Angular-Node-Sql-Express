const express = require("express");
const router = express.Router();
const {all, single, create, modify, del} = require('./../controllers/productos');
const {validateCreate, validateModify} = require('./../middlewares/productos');

router.get('/all', all);
router.get('/single/:id', single);
router.post('/new',validateCreate, create);
router.put('/modify/:id',validateModify, modify);
router.put('/delete/:id',del );

module.exports = router;