var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var safari_controller = require('../controllers/safari');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// safari ROUTES ///
// POST request for creating a safari.
router.post('/safari', safari_controller.safari_create_post);
// DELETE request to delete safari.
router.delete('/safari/:id', safari_controller.safari_delete);
// PUT request to update safari.
router.put('/safari/:id', safari_controller.safari_update_put);
// GET request for one safari.
router.get('/safari/:id', safari_controller.safari_detail);
// GET request for list of all safari items.
router.get('/safari', safari_controller.safari_list);
/* GET detail safari page */

module.exports = router;