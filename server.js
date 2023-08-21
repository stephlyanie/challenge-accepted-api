const express = require("express");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

const challengesRouter = require("./routes/challenges");
app.use("/challenges", challengesRouter);

const creationsRouter = require("./routes/creations");
app.use("/creations", creationsRouter); 

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
