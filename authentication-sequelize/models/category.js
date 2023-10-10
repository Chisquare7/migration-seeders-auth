const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/sequelizeConfig");
const { v4: uuidv4 } = require("uuid");

const Category = sequelize.define(
	"Category",
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
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category_image: {
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
		modelName: "Category",
	}
);

module.exports = Category;
