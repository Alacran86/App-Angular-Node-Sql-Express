const express = require('express');
const router = express.Router();
const { getPosts } = require('../controllers/post');


router.get('/', getPosts);

// router.get('/',(req, res) =>{
//     res.json({
//         status: 'Api Works'
//     });
// });


module.exports = router;
