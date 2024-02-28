const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwtTreat = require('../services/jwt-services.js');

jwtRequests = new jwtTreat.JWTAuthRequests();

const UserSchema = mongoose.model("User", {
    username: String,
    name: String,
    email: String,
    password: String,
});

class UserModelFunctions {

    registerUser = async (name, username, email, password, confirmpassword, res) =>{
        const [userExistsEmail, userExistsUsername] = await Promise.all([
            UserSchema.findOne({ email: email }),
            UserSchema.findOne({ username: username })
        ]);

        if(userExistsEmail){
            return res.status(422).json({ msg: 'Este email já existe! Por favor, utilize outro!' })
        }
        if(userExistsUsername){
            return res.status(422).json({ msg: 'Este usuário já existe! Por favor, utilize outro!' })
        }


        //encrypt pass
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);


        //create user
        const user = new UserSchema({
            username,
            name,
            email,
            password: passwordHash,
        })

        try{
            await user.save();

            return res
            .status(201)
            .json({ 
                msg: 'Usuário criado com sucesso!'
            });

        }catch(err){
            console.log(err)

            return res
            .status(500)
            .json({
                msg: 'Aconteceu um erro no servidor!'
            })
        }
    }

    userLogin = async (username, password, res) =>{
        const userFindUsername = await UserSchema.findOne({username: username});

        console.log(userFindUsername)
        if(!userFindUsername){
            return res.status(400).json({ msg: `Username: '${username}' not found!`});
        }

        const checkPassword = await bcrypt.compare(password, userFindUsername.password);
        if(!checkPassword){
            return res.status(400).json({ msg: `Incorrect password!` });

        }else{
            try{
                await jwtRequests.userJWT(username, res);
            }catch(err){
                console.log(err)
                return res.status(404).json({ msg: 'Falha ao criar token!'})
            }
        }
        
    }

}

module.exports = { UserSchema, UserModelFunctions };
