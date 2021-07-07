const model = require('../models/personas');



const verify = (req, res) => {
    const datos = {
      confirmacionCorreo : req.params.uuid,
      obj : {habilitado : true}
    }
    model.modify(datos).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
  }

  module.exports = {verify};