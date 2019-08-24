const routes = require('express').Router();
const customerRoutes = require('./customer.routes');
const orderRoutes = require('./order.routes');
const productRoutes = require('./product.routes');
const authRoutes = require('./auth.routes');

routes.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'successfully connected to API root, marster' });
});

routes.use('/customers', customerRoutes);
routes.use('/orders', orderRoutes);
routes.use('/products', productRoutes);
routes.use('/auth', authRoutes);

module.exports = routes;
