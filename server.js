const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser')
// const timeout = require('connect-timeout')

require("dotenv").config();

const port = process.env.PORT || 3306;

const app = express();
app.use(cors());
app.use(express.json());

function haltOnTimedout (req, res, next) {
  if (!req.timedout) next()
}

const fs = require("fs");

app.get("/", function (req, res) {
  fs.readFile("./README.md", "utf-8", (error, result) => {
    res.send(result);
  });
});

const challengesRouter = require("./routes/challenges");
app.use("/challenges", challengesRouter);

const creationsRouter = require("./routes/creations");
app.use("/creations", creationsRouter);

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const categoriesRouter = require("./routes/categories");
app.use("/categories", categoriesRouter);

const typesRouter = require("./routes/types");
app.use("/types", typesRouter);

app.listen(port, () => console.log(`Server running on ${port}`));

server.requestTimeout = 5000;
server.headersTimeout = 2000;
server.keepAliveTimeout = 3000;
server.setTimeout(10000, (socket) => {
  console.log('timeout');
  socket.destroy();
});

// Run the following commands to start the server:
// node server.js
