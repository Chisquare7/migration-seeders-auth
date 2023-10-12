const mongoose = require("mongoose");
const shortid = require("shortid");

const Schema = mongoose.Schema;

const itemSupplierSchema = new Schema({
	_id: {
		type: String,
		default: shortid.generate,
		autoIncrement: true,
		required: true,
		unique: true,
	},
	name: { type: String, required: true },
	address: { type: String, required: true },
	contact_info: { type: String, required: true },
	supplier_website: { type: String, required: true },
	terms_and_conditions: { type: String, required: true },
});

module.exports = mongoose.model("suppliers", itemSupplierSchema);