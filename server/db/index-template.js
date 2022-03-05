const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres-username',
  password: 'postgres-password',
  database: 'productdb',
  port: 5432
});

pool.connect();

module.exports = pool;