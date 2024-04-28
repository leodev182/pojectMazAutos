const { Pool } = require("pg");
require("dotenv").config({ path: "./serv.env" });

class Database {
  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      allowExitOnIdle: true,
    });

    this.pool.on("error", (err) => {
      this.handleError(err);
    });
  }

  handleError(err) {
    console.error("Error in PostgreSQL pool", err);
    // Puedes agregar más lógica aquí para manejar el error según tus necesidades
  }

  query(sql, params) {
    return this.pool.query(sql, params);
  }
}

module.exports = new Database();
