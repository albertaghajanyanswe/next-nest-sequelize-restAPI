'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sampleData = [
      { name: 'REAL_ESTATE', description: 'Real estate', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'TRANSPORT', description: 'Transport', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'SERVICES', description: 'Services', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'WORK', description: 'Work', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'ELECTRONICS', description: 'Electronics', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'HOUSE_HOLD_APPLIANCES', description: 'Household appliances', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'HOUSE_AND_GARDEN', description: 'House and garden', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'CHILDRENS_WORLD', description: 'Childrens world', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'HOBBY_AND_SPORT', description: 'Hobby and sport', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'EQUIPMENT_AND_MATERIALS', description: 'Equipment and materials', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'ANIMALS', description: 'Animals', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'FOOD_AND_BEVERAGES', description: 'Food and beverages', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { name: 'OTHER', description: 'Other', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    ];

    const tableName = 'categories';
    const sequelize = queryInterface.sequelize;

    await sequelize.transaction(async (t) => {
      await queryInterface.createTable(
        tableName,
        {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          description: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        },
        { transaction: t },
      );
      await queryInterface.bulkInsert(tableName, sampleData, { transaction: t });
    });
  },

  down: async (queryInterface, Sequelize) => {
    const tableName = 'categories';
    const sequelize = queryInterface.sequelize;
    await sequelize.transaction(async (t) => {
      await queryInterface.bulkDelete(tableName, null, { transaction: t });
      return queryInterface.dropTable(tableName);
    });
  },
};
