const grpc = require('grpc');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');

const PORT = 3003;
const server = new grpc.Server();
const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, '../../proto', 'customer_service.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);
const proto = grpc.loadPackageDefinition(packageDefinition);

const functions = {
  get: function(call, callback) {
    console.log('Get customer called');

    callback(null, {
      id: 0,
      first_name: 'marvin',
      last_name: 'hinkley'
    });
  },
  create: function(call, callback) {
    console.log('Create customer called');

    callback(null, {
      id: 0,
      first_name: 'marvin',
      last_name: 'hinkley'
    });
  },
  update: function(call, callback) {
    console.log('Update customer called');

    callback(null, {
      success: true
    });
  },
  delete: function(call, callback) {
    console.log('Delete customer called');

    callback(null, {
      success: true
    });
  }
};

server.addService(proto.neweb.CustomerService.service, functions);
server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
server.start();
