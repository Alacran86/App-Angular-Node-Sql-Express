const jwt = require('jsonwebtoken');
const fs = require('fs');
const sha1 = require('sha1');
const privateKey = fs.readFileSync('./keys/private.pem');
const signOptions = {algorithm: 'RS256', expiresIn: "10h"};
const model = require('./../models/auth');
const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);

const auth = async (req, res) => {
    try {
        let {username, pass} = req.body;
        pass = sha1(pass);
        const [user] = await model.isLogged(username, pass);
        console.log(user);
    
        if (!user) res.sendStatus(401);
        else if(!user.habilitado) res.send("verifique su mail!!");
        else if(user.habilitado) {
            const token = createToken({id: user.id});
            console.log(token);
            res.status(200).json({JWT : token, info: user});
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

module.exports = {auth};