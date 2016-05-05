import * as hapi from 'hapi';

const PORT = 8999;
const HOST = 'localhost';
const SMTP_HOST = '10.10.10.101';
const SMTP_PORT = '143';

var server = new hapi.Server();
server.connection({ port: PORT, host: HOST });

server.route(<hapi.IRouteConfiguration>{
    path: '/auth',
    method: 'GET',
    handler: (request: hapi.Request, reply: hapi.IReply) => {
        reply({}).header('Auth-Status', 'OK').header('Auth-Server', SMTP_HOST).header('Auth-Port', SMTP_PORT).code(200);
    }
});

server.start(err => {
    if (err) {
        throw err;
    } else {
        console.log('server listening on ' + HOST + ':' + PORT);
        console.log('press CTRL-C to stop');
    }
});