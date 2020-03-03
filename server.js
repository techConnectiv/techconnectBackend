const http = require('http');
// const fs = require('fs');
// const crypto = require('crypto');
const app = require('./index');

// const privateKey = fs.readFileSync('privatekey.pem').toString();
// const certificate = fs.readFileSync('certificate.pem').toString();

// const credentials = crypto.createCredentials({
//   key: privateKey,
//   cert: certificate,
// });

const server = http.createServer(app);
// server.setSecure(credentials);
const port = process.env.PORT || 3333;
server.listen(port);
