const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./router/userRoute.js");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app);

app.get("/", (req, res) => res.send("Ola mundo pelo express"));

app.listen(port, () => console.log("listening on port 3000"));
