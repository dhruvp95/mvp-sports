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

  percentage: {
    type: Sequelize.DECIMAL
  },

  skunks: {
    type: Sequelize.INTEGER
  },

}, {
  timestamps: false,
  allowNull: false
});


// Player.sync({force: true})
//   .then(() => seed(Player));
Player.sync()


module.exports = Player;



