const routes = require('express').Router();

routes.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'successfully connected to order root, marster' });
});

module.exports = routes;
