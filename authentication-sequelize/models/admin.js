const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/sequelizeConfig");
const { v4: uuidv4 } = require("uuid");
const User = require("./user");

const Admin = sequelize.define(
	"Admin",
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
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		role: {
			type: DataTypes.ENUM,
			values: ["user_admin", "management_admin"],
		},
		user_id: {
			type: Sequelize.UUID,
			references: {
				model: "users",
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
		modelName: "Admin",
	}
);

Admin.belongsTo(User, { foreignKey: "user_id" });

module.exports = Admin;
