const express = require("express");

const app = express();
const PORT = 3000;

const userController = require("./controller/usersController");

app.use(express.json());

app.use("/user", userController);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Server escutando na porta ${PORT}`));
