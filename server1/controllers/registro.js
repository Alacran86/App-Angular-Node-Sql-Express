const model = require('../models/personas');
const sha1 = require('sha1');
const {v4 : uuid} = require('uuid');
const { send } = require('../services/mail');

const create = async (req, res) => {
    try {
        const {username, pass, mail} = req.body; 
        const nuevo = {
            username,
            pass : sha1(pass),
            mail,
            confirmacionCorreo : uuid()
        };
        
        const newUser = await model.create(nuevo);
        const mailinfo = {
            to: mail,
            subject: "Gracias por registrarte :D",
            html : `<a href = "${process.env.URL}/users/verify/${nuevo.confirmacionCorreo}">Link magico de registro para ${username}</a>`
        }
        const mensaje = await send(mailinfo);
        res.json(mensaje);
    }
    catch (err) {
        console.error(err);
        res.status(500);
    }
}

module.exports = {create};