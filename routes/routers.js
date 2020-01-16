const routers = [{
        route: "/settings",
        handler: "BasicAppSetting"
    },
    {
        route: "/error",
        handler: "ErrorHandler"
    },
    {
        route: "/search",
        handler: "SearchHandler"
    },
    {
        route: "/navs",
        handler: "NavService"
    }
]

module.exports = routers;