const express = require('express');
const router = express.Router();
const { validateModify, validateCreate} = require("../middlewares/personas");
const { get, single, modify, create} = require("./../controllers/personas");


router.get('/all', get);
router.get('/single/:id', single);
router.put('/modify/:id',validateModify, modify);
router.post('/new',validateCreate, create);

module.exports = router;