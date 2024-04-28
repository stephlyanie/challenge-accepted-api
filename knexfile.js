require('dotenv').config()

module.exports = {
    client: "mysql",
    connection: {
        host: process.env.DB_JAWS,
        port: 3306,
        user: process.env.DB_LOCAL_USER,
        password: process.env.DB_LOCAL_PASSWORD,
        database: process.env.DB_LOCAL_DBNAME,
        charset: "utf8"
    }
}; 

