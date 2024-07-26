const express = require("express");
const cors = require("cors");

require("dotenv").config();

// const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "README.md"));
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

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server running`)
);

// Run the following commands to start the server:
// node server.js