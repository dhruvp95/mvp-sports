const seedData = require('./seedData');

const seed = (table) => {
  seedData.forEach(data => {
    table.create(data)
      .then(() => console.log('data successfully seeded'))
      .catch(err => console.log('error in seeding data', err))
  });
};

module.exports = seed;

