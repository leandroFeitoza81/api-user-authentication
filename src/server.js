const express = require('express');
const error = require('./utils/error');

const app = express();
const PORT = 3000;

const userController = require('./controller/usersController');

app.use(express.json());

app.use('/user', userController);

app.get('/', (_req, res) => res.send('Bem vindo!!!'));

app.use(error);

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Servidor não encontrado!' });
});

app.listen(PORT, () => console.log(`Server escutando na porta ${PORT}`));
