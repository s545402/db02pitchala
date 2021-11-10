var express = require('express'); 
const safari_controlers= require('../controllers/safari'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', safari_controlers.safari_view_all_Page ); 
module.exports = router; 