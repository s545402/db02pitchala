var express = require('express'); 
const safari_controller= require('../controllers/safari'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/create', safari_controller.safari_create_Page);
module.exports = router; 