const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const app = require('./app');

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'security', 'key', 'key.pem')),
  cert: fs.readFileSync(
    path.resolve(__dirname, 'security', 'certificate', 'cert.pem')
  ),
};

const server = https.createServer(options, app);
server.listen(443);

const serv = http.createServer(app);
serv.listen(80, () => console.log(`Servidor escutando na porta 80`));
