
const fetch = require('node-fetch');


const getPhotos =  (req, res) => {


    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((json) => res.json(json))
    .catch((error) => res.status(500).json(error));
}

module.exports = {getPhotos};