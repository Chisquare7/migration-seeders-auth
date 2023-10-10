'use strict';
/** @type {import('sequelize-cli').Migration} */
const {v4: uuidv4} = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Admins", {
			_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: uuidv4(),
			},
			_id: {
				type: Sequelize.STRING,
			},
			name: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			role: {
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
			user_id: {
				type: Sequelize.UUID,
				references: {
					model: "users",
					key: "_id",
				},
			},
		});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Admins');
  }
};