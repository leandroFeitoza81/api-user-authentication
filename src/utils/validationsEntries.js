module.exports = {
  validName: (name) => /^[a-zA-Z ]+$/.test(name) && name.length > 3,
  validEmail: (email) =>
    /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email),
  validPassword: (password) => password.length > 5,
};
