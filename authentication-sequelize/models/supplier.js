const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/sequelizeConfig");
const { v4: uuidv4 } = require("uuid");

const Supplier = sequelize.define(
	"Supplier",
	{
		_id: {
			type: DataTypes.UUID,
			defaultValue: uuidv4(),
			unique: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		contact_info: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		supplier_website: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		terms_and_conditions: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
		},
		updatedAt: {
			type: DataTypes.DATE,
		},
	},
	{
		timestamps: true,
		sequelize,
		modelName: "Supplier",
	}
);

module.exports = Supplier;