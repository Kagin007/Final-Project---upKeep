// db connection
// const db = require("./configs/db.config");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const routes = require("./routes");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/userRoutes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/api/v1", routes);
// app.use("/users", usersRouter(db));

module.exports = app;
