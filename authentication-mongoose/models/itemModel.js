const mongoose = require("mongoose");
const shortid = require("shortid");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
	_id: {
		type: String,
		default: shortid.generate,
		autoIncrement: true,
		required: true,
		unique: true,
	},
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	size: { type: String, required: true },
	quantity_in_stock: { type: Number, required: true },
	reorder_level: { type: Number, required: true },
	item_image: { type: String, required: true },
	category_id: { type: String, ref: "categories" },
	supplier_id: { type: String, ref: "suppliers" },
});

const itemModel = mongoose.model("items", itemSchema);

module.exports = itemModel;