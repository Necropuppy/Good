var sys = require('sys');
var exec = require('child_process').exec;
function react(error, stdout, stderr){
	if (stdout.indexOf('origin/master') >= 0) {
		exec("cd ~/Good && sudo forever restart app.js");
	}
}
var http = require('http');
var sleep = require('sleep');

http.createServer(function (require, response){
	exec("cd ~/Good && git pull" , react);
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Pulling...');
	response.end();
	sleep.sleep(10);
}).listen(2000);