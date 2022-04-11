const mongoose = require("mongoose");

const QUERY_STRING = "mongodb+srv://Apcarjo:ictjlac@cluster0.mb4u3.mongodb.net/AllFunds?retryWrites=true&w=majority";

const db = mongoose.connect(QUERY_STRING,
    {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Conectado a la base de datos'))
.catch((error) => console.log(error));


module.exports = db;