const Player = require('../database/models/bracketModel');


module.exports = {
  fetchAll: (req, res) => {
    Player.findAll({
      order: [['percentage', 'DESC']]
    })
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(404).send(err)
      })
  },

  createPlayer: (req, res) => {
    
    const toDecimal = (wins, losses) => {
      let total = wins + losses;
      //var test = Math.round(43 / 55*1000)/1000;
      return Math.round(wins / total*1000)/1000;
    }
    
    Player.create({
      player: req.body.player,
      wins: req.body.wins,
      losses: req.body.losses,
      percentage: toDecimal(req.body.wins, req.body.losses),
      skunks: req.body.skunks
    })
      .then(data => {
        res.status(201).send(data)
      })
      .catch(err => {
        res.status(404).send(err)
      })
  },

  deletePlayer: (req, res) => {
    Player.destroy({
      where: {
        id: req.params.id
      }
    })
      .then((data) => {
        console.log('deleted')
        res.sendStatus(200).send(data)
      })
      .catch(err => res.sendStatus(404).send(err));
  }
}