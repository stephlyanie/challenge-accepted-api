require('dotenv').config()

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
}; 
