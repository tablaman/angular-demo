'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
	res.write('Hello world!');
	res.end();
});

server.listen(3000);

