
const fetch = require('node-fetch');

const getPosts =  (req, res) => {


    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => res.json(json))
      .catch((error) => res.status(500).json(error));
    }


module.exports = {getPosts};