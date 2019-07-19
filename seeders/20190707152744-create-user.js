'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return Promise.all([
     queryInterface.bulkInsert('Users', [{
       name: 'son',
       phone: '1111',
       password: '1111',
       createdAt: Sequelize.literal('NOW()'),
       updatedAt: Sequelize.literal('NOW()')
     }])
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return Promise.all([
     queryInterface.bulkDelete('Users', null, {})
   ])
  }
};
