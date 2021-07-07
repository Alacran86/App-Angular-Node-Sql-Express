var express = require('express');
var router = express.Router();
const { verify } = require('./../controllers/users');


router.get('/all', (req, res) => {
  res.send('todos los usuarios :D');  
})

router.get('/verify/:uuid', verify);

module.exports = router;
