var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res) =>{
       res.json({
           status: 'Api Works'
       });
   });





module.exports = router;
