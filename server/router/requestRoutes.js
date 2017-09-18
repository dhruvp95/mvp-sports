const router = require('express').Router();
const bracketCtrl = require('../controller/bracketCtrl');

router.route('/players')
  .get(bracketCtrl.fetchAll)
  .post(bracketCtrl.createPlayer);



module.exports = router;


