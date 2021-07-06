const Model = require("../model/usersModel");

const createUser = async (name, email, password) => {
  if (!name || !email || !password) {
    return { erro: "Não funfou" };
  }

  const userCreated = await Model.createUser(name, email, password);

  return userCreated;
};

module.exports = {
  createUser,
};
