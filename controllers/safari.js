var Safari = require('../models/safari');
//module.exports = mongoose.model("Safari", safariSchema)


// List of all Safari
exports.safari_list = function(req, res) {
res.send('NOT IMPLEMENTED: Safari list');
};
// for a specific Safari.
exports.safari_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Safari detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.safari_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Safari create POST');
};
// Handle Costume delete form on DELETE.
exports.safari_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Safari delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.safari_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Safari update PUT' + req.params.id);
};