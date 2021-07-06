const userRouter = require("express").Router();

const Model = require("../model/usersModel");
const Service = require("../service/userService");

userRouter.get("/", async (req, res) => {
  const [users] = await Model.listAll();
  res.status(200).json(users);
});

userRouter.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await Service.createUser(name, email, password);

    if (user.erro) {
      return res.status(404).json(user);
    }
    return res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.log(error);
    return next({ erro: "Ta no next" });
  }
});

module.exports = userRouter;
