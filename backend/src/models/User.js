const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = mongoose.model("User", {
    username: String,
    name: String,
    email: String,
    password: String,
});

async function registerUser(name, username, email, password, confirmpassword, res){
    const [userExistsEmail, userExistsUsername] = await Promise.all([
        User.findOne({ email: email }),
        User.findOne({ username: username })
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
    const user = new User({
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

module.exports = {User, registerUser};
