const routers = [{
        route: "/settings",
        handler: "BasicAppSetting",
        request_type: "post"
    },
    {
        route: "/error",
        handler: "ErrorHandler",
        request_type: "post"
    },
    {
        route: "/search",
        handler: "SearchHandler",
        request_type: "post"
    },
    {
        route: "/navs",
        handler: "NavService",
        request_type: "post"
    },
    {
        route: "/dashboard",
        handler: "DashboardService",
        request_type: "get"
    },
    {
        route: "/_wk/:tab",
        handler: "TabHandler",
        request_type: "get"
    }

]

module.exports = routers;