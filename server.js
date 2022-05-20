const index = require('./public/index.html');
const http = require('http');

http.createServer(index).listen(process.env.PORT);
