const mongoose = require("mongoose") 
const safariSchema = mongoose.Schema({ 
 cost: Number, 
 varient: String, 
 user: String, 
}) 
 
module.exports = mongoose.model("Safari", 
safariSchema) 