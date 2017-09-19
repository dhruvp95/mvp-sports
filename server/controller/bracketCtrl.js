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
      console.log('wins: ', wins);
      console.log('losses: ', losses);
      let total = Number(wins) + Number(losses);
      console.log('total: ', total);
      let n = wins/total;
      
      return n.toFixed(3);
};

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