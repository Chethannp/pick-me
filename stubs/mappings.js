module.exports = {
  apis: [
    {
      url: `/repositories`,
      path: "./dummy-list",
      method: "get",
      proxy: false,
      proxyUrl: "https://www.production.com"
    }
  ]
};
