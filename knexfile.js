require('dotenv').config()

// if (process.env.JAWSDB_URL) {
    module.exports = {
        client: "mysql",
        connection: {
            host: process.env.JAWSDB_URL,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DBNAME,
            charset: "utf8"
        }
    }
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

