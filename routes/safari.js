var express = require('express'); 
const safari_controller= require('../controllers/safari'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/update', safari_controller.safari_update_Page);
module.exports = router; 