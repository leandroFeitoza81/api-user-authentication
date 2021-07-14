const userRouter = require('express').Router();

const Model = require('../model/usersModel');
const Service = require('../service/userService');

userRouter.get('/', async (req, res) => {
  const [users] = await Model.listAll();
  res.status(200).json(users);
});

userRouter.post('/', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await Service.createUser(name, email, password);

    if (user.error) {
      return res.status(user.code).json(user.message);
    }
    return res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.log(error);
    return next({ error });
  }
});

userRouter.put('/', (req, res, next) => {
  try {
    const { name, email } = req.body;

    return res.send('ola');
  } catch (error) {
    console.log(error);
    return next({ error });
  }
});

module.exports = userRouter;
