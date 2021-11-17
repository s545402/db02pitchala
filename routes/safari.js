var express = require('express'); 
const safari_controller= require('../controllers/safari'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/detail', safari_controller.safari_view_one_Page);
module.exports = router; 