require('dotenv').config();
const mongoose = require('mongoose');

dbUsername = process.env.DB_USER;
dbPassword = process.env.DB_PASS;

module.exports.connectDB = async function(){
    await mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@cluster0.uvo18fi.mongodb.net/?retryWrites=true&w=majority`)
}
