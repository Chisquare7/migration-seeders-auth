'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Suppliers", {
			_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: uuidv4(),
			},
			name: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			contact_info: {
				type: Sequelize.STRING,
			},
			supplier_website: {
				type: Sequelize.STRING,
			},
			terms_and_conditions: {
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
		});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Suppliers');
  }
};