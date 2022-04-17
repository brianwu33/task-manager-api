const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
//Auto convert from json to js object
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
