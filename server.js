const index = import('./src/index.mjs');
const http = require('http');

http.createServer(index).listen(process.env.PORT);
