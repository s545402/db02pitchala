var express = require('express'); 
const safari_controller= require('../controllers/safari'); 
var router = express.Router(); 

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
/* GET costumes */ 

router.get('/', safari_controller.safari_view_all_Page);
router.get('/update', secured, safari_controller.safari_update_Page);
router.get('/create', secured, safari_controller.safari_create_Page);
module.exports = router; 