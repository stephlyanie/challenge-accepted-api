require("dotenv").config();

const mysql = require("mysql2");

if (process.env.JAWSDB_PINK_URL) {
  module.exports = {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: "utf8",

    },
  };
} else {
  module.exports = {
    client: "mysql",
    connection: {
      host: "localhost",
      user: process.env.DB_USER_LOCAL,
      password: process.env.DB_PASSWORD_LOCAL,
      database: process.env.DBNAME_LOCAL,
      charset: "utf8",
    },
  };
}
