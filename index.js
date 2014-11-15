'use strict';
var cp = require('child_process');

module.exports = function (filepath, cb) {
	var childSpawn = cp.spawn('mp3info', ['-p', '%S', filepath]);
	var length;
	var err = null;

	childSpawn.stdout.on('data', function (stdout) {
		length = stdout.toString();
	});

	childSpawn.on('close', function () {
		cb.apply(err, length);
	});
};