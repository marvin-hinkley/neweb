const PORT = 3001;
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('./order_service.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const descriptor = grpc.loadPackageDefinition(packageDefinition);
const orderService = descriptor.orderService;

const functions = {
  Get: function(call, callback) {
    console.log('Get order called');

    callback(null, {
      result: {}
    });
  },
  Create: function(call, callback) {
    console.log('Create order called');

    callback(null, {
      result: {}
    });
  },
  Update: function(call, callback) {
    console.log('Update order called');

    callback(null, {
      result: true
    });
  },
  Delete: function(call, callback) {
    console.log('Delete order called');

    callback(null, {
      result: true
    });
  }
};

const server = new grpc.Server();
server.addService(orderService, functions);
server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
server.start();
