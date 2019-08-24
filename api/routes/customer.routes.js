const routes = require('express').Router();
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

console.log(path.join(__dirname, '/proto', 'customer_service.proto'));

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, '/proto', 'customer_service.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);
const customerProto = grpc.loadPackageDefinition(packageDefinition)
  .customerService;
const customerService = new customerProto.CustomerService(
  'localhost:3003',
  grpc.credentials.createInsecure()
);

routes.get('/:id', (req, res) => {
  customerService.Get({ id: req.params.id }, (err, res) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }

    res.status(200).json({
      message: 'successfully connected to customer retrieval method, marster'
    });
  });
});

module.exports = routes;
