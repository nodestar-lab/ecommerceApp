const path = require('path');


class NavService {
    constructor(config, jr) {
        this.config = config;
        this.jr = jr;
        logger.info("[-NavService]")
    }

    async handler(req, res) {
        let navs = require("../modules").navs;
        res.send({
            "navs": navs
        });
    }
}

module.exports = NavService;