const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelizeConfig");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const User = sequelize.define(
	"User",
	{
		_id: {
			type: DataTypes.UUID,
			defaultValue: uuidv4(),
			unique: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		phone_number: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		gender: {
			type: DataTypes.ENUM,
			values: ["male", "female"],
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
	},
	{
		timestamps: true,
		sequelize,
		modelName: "User",
	}
);

User.beforeCreate((user, option) => {
	return bcrypt
		.hash(user.password, 12)
		.then((hash) => {
			user.password = hash;
		})
		.catch((err) => {
			throw new Error();
		});
});

User.prototype.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = User;
