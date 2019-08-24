const grpc = require('grpc');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');

const PORT = 3002;
const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, '../../proto', 'order_service.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);
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
