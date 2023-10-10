'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Items", {
			_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: uuidv4(),
			},
			name: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.STRING,
			},
			price: {
				type: Sequelize.INTEGER,
			},
			size: {
				type: Sequelize.STRING,
			},
			quantity_in_stock: {
				type: Sequelize.INTEGER,
			},
			reorder_level: {
				type: Sequelize.INTEGER,
			},
			item_image: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
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
		});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};