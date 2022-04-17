// const express = require("express");
// require("./db/mongoose");
// const userRouter = require("./routers/user");
// const taskRouter = require("./routers/task");

// const app = express();
// const port = process.env.PORT || 3000;

// //Auto convert from json to js object
// app.use(express.json());
// app.use(userRouter);
// app.use(taskRouter);
const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log("Server is up on port " + port);
});
