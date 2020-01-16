class BasicAppSetting {
    constructor(config, jr) {
        this.config = config;
        this.jr = jr;
        logger.info("[-BasicAppSetting] ")
    }
    handler(req, res) {

        console.log("req : ", req);
        res.send({
            "error": "this is 400 error "
        });
    }

}

module.exports = BasicAppSetting;