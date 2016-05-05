"use strict";
var hapi = require('hapi');
var PORT = 8999;
var HOST = 'localhost';
var SMTP_HOST = '10.10.10.101';
var SMTP_PORT = '143';
var server = new hapi.Server();
server.connection({ port: PORT, host: HOST });
server.route({
    path: '/auth',
    method: 'GET',
    handler: function (request, reply) {
        reply({}).header('Auth-Status', 'OK').header('Auth-Server', SMTP_HOST).header('Auth-Port', SMTP_PORT).code(200);
    }
});
server.start(function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log('server listening on ' + HOST + ':' + PORT);
        console.log('press CTRL-C to stop');
    }
});
