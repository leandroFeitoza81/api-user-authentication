module.exports = (err, _req, res) => {
  console.error({ err });

  res.status(err.statusCode || 500).json({
    message: err.errorMessage || 'Erro interno',
  });
};
