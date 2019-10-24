// const express = require('express').express();
// const app = express()
// const Port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(Port, () => console.log(`Example app listening on Port ${Port}!`))
console.log(__dirname);
const routes= require("./routes/routers");
const service_dir = "../shoppingApp/services/";
const Jageera = require("../Jageerajs/JageeraServer");
let config = require("./config");

let entities = require("../shoppingApp/collections");
let jr = new Jageera(config);
jr.readServiceDir();
jr.setupRoutes(routes, service_dir);
jr.DBManager.setupEntity(entities);
jr.startServer();
jr.ErrorHandler.saveProduct();