const routes = require('express').Router();
const grpc = require('grpc');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
  'c:\\dev\\neweb\\proto\\customer_service.proto',
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);
const customerProto = grpc.loadPackageDefinition(packageDefinition);
const customerService = new customerProto.neweb.CustomerService(
  'localhost:3003',
  grpc.credentials.createInsecure()
);

routes.get('/:id', (req, res) => {
  customerService.Get({ id: req.params.id }, (err, customer) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }

    res.status(200).json({
      message: 'successfully connected to customer retrieval method, marster',
      customer: customer
    });
  });
})
.delete('/:id', (req, res) => {
  customerService.Delete({ id: req.params.id }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }

    res.status(200).json({
      message: 'successfully connected to customer deletion method, marster',
      result: `success: ${JSON.stringify(result.success)}`
    });
  });
});

module.exports = routes;
