var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SupplierSchema = new Schema({
    supplierId: ObjectId,
    name: String,
    type: String
});

var model = mongoose.model('Supplier', SupplierSchema);


module.exports = model;
module.exports.somethingElse = "";