const express = require("express");
const app = express();

app.listen(3002, () => console.log("server running on port 3002"));

app.use(express.static('public'));

const routeMain = require('./src/routes/main.js');

app.use("/", routeMain);