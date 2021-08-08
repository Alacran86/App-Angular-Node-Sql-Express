const express = require("express");
const router = express.Router();
const {all, single, create, create2, modify} = require('./../controllers/productos');
const {validateCreate, validateModify} = require('./../middlewares/productos');
const multer = require('multer');
const config = { dest: "./public/tmp"};
const upload = multer(config); 

router.get('/all', all);
router.get('/single/:id', single);
router.post('/new',validateCreate, create);
router.post('/create', upload.array("imagen"), create2);
router.put('/modify/:id',validateModify, modify);

module.exports = router;