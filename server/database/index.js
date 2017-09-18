const Sequelize = require('sequelize');

const db = new Sequelize('postgres://gbxtsfqz:q1XOCtYyxZJA-YM9iiZ6TsB98uc5OUIu@elmer.db.elephantsql.com:5432/gbxtsfqz');

db.authenticate()
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch(err => console.log('Error in connecting to database'));


module.exports = db;