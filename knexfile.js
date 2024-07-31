require('dotenv').config()

const mysql = require('mysql2');

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

let connection;
// if (process.env.JAWSDB_PINK_URL) {  
//   module.exports = {
//     client: "mysql",
//     connection: mysql.createConnection(process.env.JAWSDB_PINK_URL),
//     connectTimeout: 1000000,
//     acquireTimeout: 1000000,
//     waitForConnections: true,
//     queueLimit: 0,
//   }
// } else {
//   module.exports = {
//     client: "mysql",
//     connection: mysql.createConnection({
//       host: 'localhost',
//       user: process.env.DB_USER_LOCAL,
//       password: process.env.DB_PASSWORD_LOCAL,
//       database: process.env.DBNAME_LOCAL,
//     }),
//     pooling: {
//       enabled: true,
//       connectTimeout: 1000000,
//       acquireTimeout: 1000000,
//       waitForConnections: true,
//       queueLimit: 0,
//     }
// }
// }

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
    //   }
// else {
//     module.exports = {
//         client: "mysql",
//         connection: {
//             host:     // }
// "localhost",
//             user: process.env.DB_USER_LOCAL,
//             password: process.env.DB_PASSWORD_LOCAL,
//             database: process.env.DBNAME_LOCAL,
//             charset: "utf8"
//         }
//     }; 
// }

