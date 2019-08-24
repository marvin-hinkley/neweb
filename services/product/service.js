const PORT = 3002;
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('./product_service.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const descriptor = grpc.loadPackageDefinition(packageDefinition);
const productService = descriptor.productService;

const functions = {
  Get: function(call, callback) {
    console.log('Get product called');

    callback(null, {
      result: {}
    });
  },
  Create: function(call, callback) {
    console.log('Create product called');

    callback(null, {
      result: {}
    });
  },
  Update: function(call, callback) {
    console.log('Update product called');

    callback(null, {
      result: true
    });
  },
  Delete: function(call, callback) {
    console.log('Delete product called');

    callback(null, {
      result: true
    });
  }
};

const server = new grpc.Server();
server.addService(productService, functions);
server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
server.start();
