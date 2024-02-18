const { app } = require('./src/app.js');
const dotenv = require('dotenv');
dotenv.config();

port = process.env.PORT


app.listen(port, () =>
console.log("Servidor funcionando!")
)
