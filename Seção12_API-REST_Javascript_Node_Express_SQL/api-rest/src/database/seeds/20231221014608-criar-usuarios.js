const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Luiz 1',
        email: 'luiz1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz 2',
        email: 'luiz2@gmail.com',
        password_hash: await bcryptjs.hash('12345686', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz 3',
        email: '3@gmail.com',
        password_hash: await bcryptjs.hash('91236899456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz 4',
        email: 'luiz4@gmail.com',
        password_hash: await bcryptjs.hash('1368956', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
