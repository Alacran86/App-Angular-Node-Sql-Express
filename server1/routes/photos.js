const express = require('express');
const router = express.Router();
const { getPhotos } = require('../controllers/photos')

router.get('/', getPhotos);



module.exports = router;
