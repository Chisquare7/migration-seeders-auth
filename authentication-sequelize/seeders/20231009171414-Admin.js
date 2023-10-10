'use strict';

/** @type {import('sequelize-cli').Migration} */
const adminDetails = [
	{
    name: "Folorunsho",
    email: "folorunsho.agent@gmail.com",
		role: "management_admin",
		user_id: "61f071d8-cd0a-476e-b4a3-bb6f6061f02e",
		createdAt: new Date(),
		updatedAt: new Date()
	},
];
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("admins", adminDetails)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("admins", {
			email: "folorunsho.agent@gmail.com"
		});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
