//server/db.cjs
const pgPromise = require('pg-promise');
const db = pgPromise()({
  connectionString: 'postgres://postgres:fares1234@localhost:5432/postgres',
});

db.connect()
  .then(obj => {
    console.log('Database connection established');
    obj.done(); // Release the connection
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

module.exports = db;
