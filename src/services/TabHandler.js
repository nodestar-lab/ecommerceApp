class TabHandler {

    constructor(config, jr) {
        this.config = config;
        this.jr = jr;
        logger.info("[-TabHandler]");
    }

    async handler(req, res) {
        console.log("tab handler here ", req.params);
        res.send({
            tab: [{
                label: "tab1",
                identifier: "",
                header: ""
            }, {
                label: "tab2",
                identifier: "",
                header: ""
            }, {
                label: "tab3",
                identifier: "",
                header: ""
            }]
        })
    }


}

module.exports = TabHandler;