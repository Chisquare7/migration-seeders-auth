const mongoose = require("mongoose");
const shortid = require("shortid");

const Schema = mongoose.Schema;

const itemCategoriesSchema = new Schema({
	_id: {
		type: String,
		default: shortid.generate,
		autoIncrement: true,
		required: true,
		unique: true,
	},
	name: { type: String, required: true },
	description: { type: String, required: true },
	category_image: { type: String, required: true },
});

module.exports = mongoose.model("categories", itemCategoriesSchema);