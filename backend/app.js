const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

//ROute inports
const products = require("./routes/productRoute");
app.use("/api/v1", products);

//middleware for errors
app.use(errorMiddleware);

module.exports = app;
