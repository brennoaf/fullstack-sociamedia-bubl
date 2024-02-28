const express = require('express');
const mongoose = require('mongoose');
const connectionDB = require('./config/dbConfig.js');

//JSON Response config as default
const app = express();
app.use(express.json());

//Models
const User = require('./models/User')
const userRegister = require('./models/User.js')

//Routes
const PUauthRoutes = require('./routes/PUBLICauthRoutes.js')


app.get('/', (req, res) =>{
    res.status(200).json({ msg: "Conexão estabelecida!"})
});


//Using auth routes
app.use('/auth', authRoutes);


try{
    connectionDB.connectDB();
    console.log('Conectado estabelecida com o banco de dados!');
}catch (err){
    console.log('Erro com o banco de dados: ' + err);
}


exports.app = app;