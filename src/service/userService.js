const Model = require('../model/usersModel');
const httpResponses = require('../utils/httpResponses');
const valid = require('../utils/validationsEntries');

const createUser = async (name, email, password) => {
  if (
    !valid.validName(name) ||
    !valid.validEmail(email) ||
    !valid.validPassword(password)
  ) {
    return httpResponses.INVALID_DATA;
  }

  const userCreated = await Model.createUser(name, email, password);

  return userCreated;
};

module.exports = {
  createUser,
};
