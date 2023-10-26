const pgPromise = require('pg-promise');
const db = pgPromise()({
  connectionString: 'postgres://postgres@localhost:5432/postgres',
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
