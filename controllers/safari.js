const safaris = require('../models/safari')
var Safari = require('../models/safari');
//module.exports = mongoose.model("Safari", safariSchema)


// List of all Safari

exports.safari_list = async function (req, res) {
    try {
        theSafari = await Safari.find();
        res.send(theSafari);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.safari_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await safaris.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.safari_view_all_Page = async function (req, res) {
    try {
        theSafaris = await Safari.find();
        res.render('safari', { title: 'Safari Search Results', results: theSafaris });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.safari_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Safari();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.user = req.body.user;
    document.varient = req.body.varient;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.safari_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await safaris.findById(req.params.id)
        // Do updates of properties 
        if (req.body.user)
            toUpdate.user = req.body.user;
        if (req.body.varient) toUpdate.varient = req.body.varient;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

// Handle Costume delete form on DELETE.
exports.safari_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await safaris.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.safari_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await safaris.findById( req.query.id)
    res.render('safaridetail',
   { title: 'Safari Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

exports.safari_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('safaricreate', { title: 'Safari Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


exports.safari_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await safaris.findById(req.query.id)
    res.render('safariupdate', { title: 'Safari Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   
   exports.safari_delete_Page = async function(req, res) {
       console.log("Delete view for id " + req.query.id)
       try{
       result = await safaris.findById(req.query.id)
       res.render('safaridelete', { title: 'Safari Delete', toShow:
      result });
       }
       catch(err){
       res.status(500)
       res.send(`{'error': '${err}'}`);
       }
      };