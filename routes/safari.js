var express = require('express'); 
const safari_controlers= require('../controllers/safari'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.delete('/safari/:id', safari_controlers.safari_delete);
module.exports = router; 