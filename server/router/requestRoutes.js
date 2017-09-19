const router = require('express').Router();
const bracketCtrl = require('../controller/bracketCtrl');

router.route('/players')
  .get(bracketCtrl.fetchAll)
  .post(bracketCtrl.createPlayer);

router.route('/players/:id')
  .delete(bracketCtrl.deletePlayer);



module.exports = router;


