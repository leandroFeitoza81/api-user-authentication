const connection = require('../../database/connection');

const listAll = async () => {
  const users = await connection.execute('SELECT * FROM tekila.users');
  return users;
};

const createUser = async (name, email, password) => {
  const userCreated = connection.execute(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  );
  return userCreated;
};

module.exports = {
  listAll,
  createUser,
};
