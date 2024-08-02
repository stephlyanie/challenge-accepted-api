const express = require("express");
const cors = require("cors");

require("dotenv").config();

const port = process.env.PORT || 3306;

const app = express();
app.use(cors());
app.use(express.json());

const fs = require("fs");

app.get("/", function (req, res) {
  fs.readFile("./README.md", "utf-8", (error, result) => {
    res.send(result);
  });
});

const challengesRouter = require("./routes/challenges");
app.use("/challenges", timeout('5s'), bodyParser.json(), haltOnTimedout, challengesRouter);

const creationsRouter = require("./routes/creations");
app.use("/creations", creationsRouter);

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const categoriesRouter = require("./routes/categories");
app.use("/categories", categoriesRouter);

const typesRouter = require("./routes/types");
app.use("/types", typesRouter);

app.listen(port, () => console.log(`Server running on ${port}`));

// Run the following commands to start the server:
// node server.js
