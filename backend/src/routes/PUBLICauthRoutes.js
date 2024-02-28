const express = require('express');
const router = express.Router();
const userModel = require('../models/User.js');
const userController = require('../controllers/userController.js');
const app = express();
app.use(express.json())

//importing routes
const userAuth = new userController.UserAuthentication();

//public routes
router.post('/register', async (req, res) => {
    try{
        await userAuth.userRegister(req, res);
    }catch(err){
        console.log('erro: ' + err);
        res.status(500).json({ msg: `Erro no servidor!`});
    }
    
})

router.post('/login', async (req, res) => {
    try{
        await userAuth.userLogin(req, res);

    }catch(err){
        console.log('erro:' + err);
        return res.status(500).json({ msg: 'Erro no servidor!' });
    }

})

module.exports = router;
