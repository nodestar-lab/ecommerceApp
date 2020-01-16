const path = require('path');
let config = require("./config");

const app_path = path.resolve(__dirname);
const jr_path = path.resolve(__dirname, "../Jageerajs");

config.path.app = app_path;
config.path.jr = jr_path;
const routes = require(app_path + config.path.routes);
const service_dir = app_path + config.path.service;
const JageeraServer = require(jr_path + config.path.server);

let entities = require(app_path + config.path.entity);

const jr = new JageeraServer(config);

jr.setupServices()
    .then(() => jr.setupRoutes(routes, service_dir))
    .then(() => jr.DBManager.setupEntity(entities))
    .then(() => jr.TemplateService.initialize())
    .catch(err =>
        console.log(err)
    );