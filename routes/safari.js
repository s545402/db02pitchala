var express = require('express'); 
const safari_controller= require('../controllers/safari'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/delete', safari_controller.safari_delete_Page);
module.exports = router; 