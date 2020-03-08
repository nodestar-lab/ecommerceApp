const path = require('path');


class DashboardService {
    constructor(config, jr) {
        this.config = config;
        this.jr = jr;
        logger.info("[-DashboardService]")
    }

    async handler(req, res) {
        let dashboard = require("../modules").dashboard;
        res.send({
            "dashboard": dashboard
        });
    }
}

module.exports = DashboardService;