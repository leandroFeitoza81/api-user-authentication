module.exports = {
  INVALID_DATA: {
    message: 'Dados Inválidos. Tente novamente.',
    code: '409',
    error: true,
  },
  EMAIL_ALREADY_EXISTS: {
    message: 'E-mail já cadastrado na nossa base de dados.',
    error: true,
  },
  USER_NOT_FOUND: {
    message: 'Usuário não cadastrado.',
    error: true,
  },
  SQL_ERROR: {
    message: 'Erro interno',
    error: true,
  },

  UNAUTHORIZED: {
    message: 'Token inválido ou não informado',
    error: true,
  },
  SUCCESFULLY_LOGIN: {
    message: 'Login efetuado com sucesso',
    error: true,
  },
  CREATED: {
    message: 'Usuário cadastrado',
    error: false,
  },
};
