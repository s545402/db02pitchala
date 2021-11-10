const safaris = require('../models/safari')
var Safari = require('../models/safari');
//module.exports = mongoose.model("Safari", safariSchema)


// List of all Safari

exports.safari_list = async function(req, res) { 
    try{ 
        theSafari = await Safari.find(); 
        res.send(theSafari); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific Safari.
exports.safari_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Safari detail: ' + req.params.id);
};

exports.safari_view_all_Page = async function(req, res) { 
    try{ 
        theSafaris = await Safari.find(); 
        res.render('safari', { title: 'Safari Search Results', results: theSafaris }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.safari_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Safari(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.user = req.body.user; 
    document.varient = req.body.varient; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume delete form on DELETE.
exports.safari_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Safari delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.safari_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Safari update PUT' + req.params.id);
};