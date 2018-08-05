const router = require('express').Router();
const apiController = require('../controllers/apiController.js');

router.route('/v1/pages').get(apiController.getList);

router.route('/pages/:day').get(apiController.getDay);

router.route('/pages/today').get(apiController.sendToday);

router.route('/pages').post(apiController.createPage);

router.route('/pages').put(apiController.editPage);

router.route('/v1/pages/search/:keyword').get(apiController.searchKeyword);

module.exports = router;