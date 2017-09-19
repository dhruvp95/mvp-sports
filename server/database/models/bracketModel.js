const Sequelize = require('sequelize');
const db = require('../index');
const seed = require('../../seeding');


const Player = db.define('Player', {
  player: {
    type: Sequelize.STRING
  },

  wins: {
    type: Sequelize.INTEGER
  },

  losses: {
    type: Sequelize.INTEGER
  },

  skunks: {
    type: Sequelize.INTEGER
  }

}, {
  timestamps: false,
  allowNull: false
});


Player.sync({force: true})
// Player.sync()
  .then(() => seed(Player));


module.exports = Player;



