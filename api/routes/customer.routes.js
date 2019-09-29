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


module.exports = ({ router }) => {
  router.get('/', async (ctx, next) => {
    console.log('get all customer is not yet implemented');
  })

  router.get('/:id', (ctx, next) => {
    customerService.Get({ id: req.params.id }, (err, customer) => {
      if (err) {
        throw Error(err);
      }

      ctx.body = {
        message: 'successfully connected to customer retrieval method, marster',
        customer: customer
      };
    });
  });

  router.delete('/:id', (ctx, next) => {
    customerService.Delete({ id: req.params.id }, (err, result) => {
      if (err) {
        throw Error(err);
      }

      ctx.body = {
        message: 'successfully connected to customer deletion method, marster',
        result: `success: ${JSON.stringify(result.success)}`
      };
    });
  });
}
