const express = require("express");
const router = express.Router();
const model = require("./../models/categorias");
const {validateCreate, validateModify} = require("../middlewares/categorias");
const {get, getSingle, create, modify} = require("./../controllers/categorias");





router.get('/all', get);
router.get('/single/:id', getSingle);
router.post('/new',validateCreate, create);
router.put('/modify/:id',validateModify, modify);

module.exports = router;