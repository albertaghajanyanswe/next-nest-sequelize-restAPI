'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sampleData = [
      {
        value: 'GUEST',
        description: 'Guest user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        value: 'USER',
        description: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        value: 'ADMIN',
        description: 'ADMIN user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    const tableName = 'roles';
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
          value: {
            type: Sequelize.ENUM('ADMIN', 'USER', 'GUEST'),
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
    const tableName = 'roles';
    const sequelize = queryInterface.sequelize;
    await sequelize.transaction(async (t) => {
      await queryInterface.bulkDelete(tableName, null, { transaction: t });
      return queryInterface.dropTable(tableName);
    });
  },
};
