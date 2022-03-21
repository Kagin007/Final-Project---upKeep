const { Pool } = require("pg");

const db = new Pool({
  user: "labber",
  host: "localhost",
  database: "cleaners_marketplace_api_development",
  password: "labber",
  port: 5432,
});

module.exports = db;
