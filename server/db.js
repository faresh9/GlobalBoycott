const { init } = require('pg-promise')();
const db = init({
  connectionString: 'postgres://postgres@localhost:5432/postgres',
});

module.exports = db;
