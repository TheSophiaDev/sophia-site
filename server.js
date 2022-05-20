const index = require('./src/index.js');
const http = require('http');

http.createServer(index).listen(process.env.PORT);
