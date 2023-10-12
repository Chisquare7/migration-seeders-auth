const mongoose = require("mongoose");
const shortid = require("shortid");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	_id: {
		type: String,
		default: shortid.generate,
		autoIncrement: true,
		required: true,
		unique: true,
	},
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, unique: true },
	role: { type: String, required: true },
	user_id: { type: String, ref: "users" },
});

adminSchema.pre("save", async function (next) {
	const passwordhash = await bcrypt.hash(this.password, 12);
	this.password = passwordhash;
	next();
});

adminSchema.methods.isValidPassword = async function () {
	const admin = this;
	const comparePassword = await bcrypt.compare(password, admin.password);
	return comparePassword;
};

module.exports = mongoose.model("admins", adminSchema);
