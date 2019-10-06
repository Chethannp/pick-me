module.exports = {
    apis: [
        {
            url: "/repo",
            path: "./jobs-list",
            method: "get",
            proxy: false,
            proxyUrl: "https://www.production.com"
        },
        {
            url: "/account",
            path: "./auth-response",
            method: "post",
            proxy: false,
            proxyUrl: "https://www.production.com"
        }
    ]
};
