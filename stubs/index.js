//Stub server to facilitate local development by mocking the response
const express = require("express");
const stubServer = express();

var mapper = require("./mappings");
stubServer.use((req, res, next) => {
    console.log(`${req.method},${req.path}`);
    next();
});

stubServer.get("/repo", (req, res) => {
    const api = mapper.apis.find(path => path.url === "/repo");
    res.jsonp(require(api.path));
});

stubServer.post("/account", (req, res) => {
    const api = mapper.apis.find(path => path.url === "/account");
    res.jsonp(require(api.path));
});

stubServer.listen(9002, () => {
    console.log("JSON Server is running");
});
