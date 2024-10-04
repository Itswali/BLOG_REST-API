const dotenv = require("dotenv");
dotenv.config()
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectMongodb = require("./init/mongodb");
const { authRoute } = require("./routes")
const { errorHandler } = require("./middlewares");
const notfound = require("./controllers/notfound");

const app = express();

//connect database
connectMongodb();

app.use(express.json({limit: "500mb"}));
app.use(bodyParser.urlencoded({limit: "500mb", extended: true}));
app.use(morgan("dev"));

//route section

app.use("/api/v1/auth", authRoute)

//not found route

app.use("*", notfound)

//error handling middleware

app.use(errorHandler);

module.exports = app;
