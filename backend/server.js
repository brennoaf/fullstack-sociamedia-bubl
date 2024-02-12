require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
port = 3000;

//JSON Response config as default
app.use(express.json());

app.get('/', (req, res) =>{
    res.status(200).json({ msg: "Conexão estabelecida!"})
});


//Register User
app.post('/auth/register', async(req, res) =>{

    const {
        name,
        username, 
        email, 
        password, 
        confirmpassword
    } = req.body

    //validations
    if(!username) {
        return res.status(422).json({ msg: 'Insira um nome de usuário!' })
    }

})


dbUser = process.env.DB_USER
dbPassword =  process.env.DB_PASS

async function connectMongoDB(){
    try{
        await mongoose
            .connect(
                `mongodb+srv://${dbUser}:${dbPassword}@cluster0.uvo18fi.mongodb.net/?retryWrites=true&w=majority`
            )
        console.log('Conectado estabelecida com o banco de dados!');
    }catch (err){
        console.log('Erro com o banco de dados: ' + err);
    }
}

connectMongoDB();
app.listen(port);