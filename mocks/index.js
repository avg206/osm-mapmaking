const { startServer } = require('@juno/toolbox/mock-server');

const routes = require('./routes');
const hosts = require('./hosts.json');

startServer(routes, hosts);
