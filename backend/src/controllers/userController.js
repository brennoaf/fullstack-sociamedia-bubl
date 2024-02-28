const express = require('express');
const userModel = require('../models/User.js');
const app = express();
app.use(express.json())

//importing routes
const UserModel = new userModel.UserModelFunctions();

class UserAuthentication{
    userRegister = async (req, res) =>{

        const {
            name,
            username, 
            email, 
            password, 
            confirmpassword
        } = req.body

        //validations
        if(!name){
            return res.status(422).json({ msg: 'Insira um nome!'});
        }

        if(!username) {
            return res.status(422).json({ msg: 'Insira um nome de usuário!' });
        }

        if(!email){
            return res.status(422).json({ msg: 'Insira um endereço de email!' });
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
            await UserModel.registerUser(name, username, email, password, confirmpassword, res);
        }
        catch(err){
            console.log('erro:' + err);
            return res.status(500).json({ msg: 'Erro no servidor!' });
        }

    }


    userLogin = async (req, res) => {
        const {
            username,
            password
        } = req.body

        if(!username){
            res.status(400).json({ msg: 'Please, insert a email!' });
        }

        else
        if(!password){
            res.status(400).json({ msg: 'Please, insert a password' });
        }

        else{
            try{
                await UserModel.userLogin(username, password, res);
    
            }catch(err){
                console.log('erro:' + err);
                return res.status(500).json({ msg: 'Erro no servidor!' });
            }
        }
        
    }
}

module.exports = { UserAuthentication };