require('dotenv').config()

const mysql = require('mysql');
const connection ="";
if(process.env.JAWSDB_URL) {  
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER_LOCAL,
    password: process.env.DB_PASSWORD_LOCAL,
    database: process.env.DBNAME_LOCAL,
  });
}

// if (process.env.JAWSDB_URL) {
    // module.exports = {
    //     client: "mysql",
    //     connection: {
    //         host: process.env.DB_HOST,
    //         port: process.env.PORT,
    //         user: process.env.DB_USER,
    //         password: process.env.DB_PASSWORD,
    //         database: process.env.DB_NAME,
    //         charset: "utf8",
    //         pool: {
    //             max: 1,
    //             min: 0,
    //             createTimeoutMillis: 3000,
    //             acquireTimeoutMillis: 10000,
    //             idleTimeoutMillis: 30000,
    //             reapIntervalMillis: 1000,
    //             createRetryIntervalMillis: 100,
    //         }
    //     }
    // }
// } else {
//     module.exports = {
//         client: "mysql",
//         connection: {
//             host: "localhost",
//             user: process.env.DB_USER_LOCAL,
//             password: process.env.DB_PASSWORD_LOCAL,
//             database: process.env.DBNAME_LOCAL,
//             charset: "utf8"
//         }
//     }; 
// }

