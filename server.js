const express = require("express");
const cors = require("cors");

require("dotenv").config();
// const mysql = require('mysql');

const port = process.env.PORT || 3306;
// const connection = mysql.createConnection(process.env.JAWSDB_URL);

const app = express();
app.use(cors());
app.use(express.json());

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

// connection.connect();


app.listen(port, () =>
  console.log(`Server running`)
);

// Run the following commands to start the server:
// node server.js