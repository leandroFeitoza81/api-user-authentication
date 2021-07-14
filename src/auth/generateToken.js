require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const generateToken = (user) => {
  const jwtconfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, SECRET, jwtconfig);
  return token;
};

module.exports = generateToken;
