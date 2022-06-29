const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
//ROute inports
const products = require("./routes/productRoute");
const user = require("./routes/userRoute");
app.use("/api/v1", products);
app.use("/api/v1", user);
//middleware for errors
app.use(errorMiddleware);

module.exports = app;
