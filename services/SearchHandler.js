class SearchHandler {

    constructor(config, jr) {
        this.config = config;
        this.jr = jr;
        logger.info("[-SearchHandler]");
    }

    async handler(req, res) {
        console.log("handle search here ", req.body);
        res.send({
            res: req.body
        })
    }


}

module.exports = SearchHandler;