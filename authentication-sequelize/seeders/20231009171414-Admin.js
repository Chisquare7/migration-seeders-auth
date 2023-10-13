'use strict';

/** @type {import('sequelize-cli').Migration} */
const adminDetails = [
	{
		name: "pelumi",
		email: "pelumi345@gmail.com",
		password: "pelumi247",
		role: "management_admin",
		user_id: "95aa4e1d-bda8-4941-8314-ffe89c34f0df",
		createdAt: new Date(),
		updatedAt: new Date(),
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
