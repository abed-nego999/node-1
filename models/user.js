var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    nombre: { type: String },
    apellidos: { type: String },
    nacimiento: { type: Date }
});
  
module.exports = mongoose.model('User', userSchema);