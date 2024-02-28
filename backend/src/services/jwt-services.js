const userModel = require('../models/User.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class JWTAuthRequests{
    userJWT = async(username, res) =>{
        try{
            const jwt_secret = process.env.JWT_SECRET;
            const token = jwt.sign(
                {
                    id: username._id,
                },
                jwt_secret,
            )
            return res.status(200).json({ msg: 'Autenticação feita com sucesso!', token })
            
        }catch(err){
            console.log('Service error: ' + err);
            return res.status(404).json({ msg: 'Erro!' });

        }

    }

}

module.exports = { JWTAuthRequests }