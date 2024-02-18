const express = require('express');
const router = express.Router();
const userRegister = require('../models/User.js')
const app = express();
app.use(express.json())

//importing routes

router.post('/register', async(req, res) =>{

    const {
        name,
        username, 
        email, 
        password, 
        confirmpassword
    } = req.body

    //validations
    if(!name){
        return res.status(422).json({ msg: 'Insira um nome!'})
    }

    if(!username) {
        return res.status(422).json({ msg: 'Insira um nome de usuário!' })
    }

    if(!email){
        return res.status(422).json({ msg: 'Insira um endereço de email!' })
    }

    if(!password){
        return res.status(422).json({ msg: 'Insira uma senha!' });
    }

    if(!confirmpassword){
        return res.status(422).json({ msg: 'Insira a confirmação da senha!' });
    }

    if(password != confirmpassword){
        return res.status(422).json({ msg: 'As senhas não são iguais!' });
    }

    

    //Verify and deny multiple credentials
    try{
        await userRegister.registerUser(name, username, email, password, confirmpassword, res);
    }
    catch(err){
        console.log('erro:' + err);
    }

})

module.exports = router;
