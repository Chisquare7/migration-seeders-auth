const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/sequelizeConfig");
const { v4: uuidv4 } = require("uuid");
const Category = require("./category");
const Supplier = require("./supplier");


const Item = sequelize.define(
	"Item",
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
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		size: {
			type: DataTypes.ENUM,
			values: ["small", "medium", "large"],
		},
		quantity_in_stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		reorder_level: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		item_image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category_id: {
			type: Sequelize.UUID,
			references: {
				model: "categories",
				key: "_id",
			},
		},
		supplier_id: {
			type: Sequelize.UUID,
			references: {
				model: "suppliers",
				key: "_id",
			},
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
		modelName: "Item",
	}
);

Item.belongsTo(Category, { foreignKey: "category_id" });
Item.belongsTo(Supplier, { foreignKey: "supplier_id" });

module.exports = Item;
