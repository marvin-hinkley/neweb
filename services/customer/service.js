const PORT = 3003;
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('./customer_service.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const descriptor = grpc.loadPackageDefinition(packageDefinition);
const customerService = descriptor.customerService;

const functions = {
  Get: function(call, callback) {
    console.log('Get customer called');

    callback(null, {
      result: {
        id: 0,
        first_name: 'marvin',
        last_name: 'hinkley'
      }
    });
  },
  Create: function(call, callback) {
    console.log('Create customer called');

    callback(null, {
      result: {
        id: 0,
        first_name: 'marvin',
        last_name: 'hinkley'
      }
    });
  },
  Update: function(call, callback) {
    console.log('Update customer called');

    callback(null, {
      result: true
    });
  },
  Delete: function(call, callback) {
    console.log('Delete customer called');

    callback(null, {
      result: true
    });
  }
};

const server = new grpc.Server();
server.addService(customerService, functions);
server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
server.start();
