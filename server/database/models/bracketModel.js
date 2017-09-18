const Sequelize = require('sequelize');
const db = require('../index');


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
  timestamps: false
})


// Player.sync({force: true});
Player.sync();

module.exports = { Player };



