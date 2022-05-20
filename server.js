const Home = require('./src/Home');
const http = require('http');

http.createServer(Home).listen(process.env.PORT);
