const http = require('http');
const app = require('./index');

const server = http.createServer(app);
server.listen(3333);
