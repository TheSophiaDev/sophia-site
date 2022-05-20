const index = require('./public/index');
const http = require('http');

http.createServer(index).listen(process.env.PORT);
