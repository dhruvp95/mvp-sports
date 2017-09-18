const { Player } = require('../database/models/bracketModel');


module.exports = {
  fetchAll: (req, res) => {
    Player.findAll()
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(404).send(err)
      })
  },

  createPlayer: (req, res) => {
    Player.create({
      player: req.body.player,
      wins: req.body.wins,
      losses: req.body.losses,
      skunks: req.body.skunks
    })
      .then(data => {
        res.status(202).send(data)
      })
      .catch(err => {
        res.status(404).send(err)
      })
  }
}