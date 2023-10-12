const mongoose = require("mongoose")
const shortid = require("shortid")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema

const userSchema = new Schema({
	_id: {
		type: String,
		default: shortid.generate,
		autoIncrement: true,
		required: true,
		unique: true,
	},
	name: { type: String, required: true },
	address: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, unique: true },
	phone_number: { type: String, required: true },
	gender: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
    const passwordhash = await bcrypt.hash(this.password, 12)
    this.password = passwordhash
    next()
})

userSchema.methods.isValidPassword = async function (password) {
    const user = this
    const comparePassword = await bcrypt.compare(password, user.password)
    return comparePassword
}

module.exports = mongoose.model("users", userSchema)