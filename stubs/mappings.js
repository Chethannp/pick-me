module.exports = {
  apis: [
    {
      url: `/repos`,
      path: "./dummy-list",
      method: "get",
      proxy: false,
      proxyUrl: "https://www.production.com"
    }
  ]
};
