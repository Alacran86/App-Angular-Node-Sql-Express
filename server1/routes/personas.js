const express = require('express');
const router = express.Router();
const { validateModify} = require("../middlewares/personas");
const { get, single, modify} = require("./../controllers/personas");


router.get('/all', get);
router.get('/single/:id', single);
router.put('/modify/:id',validateModify, modify);

module.exports = router;