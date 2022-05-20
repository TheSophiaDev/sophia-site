const index = require('./src/index');
const http = require('http');

http.createServer(index).listen(process.env.PORT);
