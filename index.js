'use strict';

// Require the child process
var cp = require('child_process');

/**
 * Function to pass the length of mp3 file passed as param filepath to cb
 * Returns the length in seconds
 *
 * @param filepath string Path to mp3 file whose length is to be calculated
 * @param cb function Callback function to be called upon once length is successfully
 * calculated 
 */	

module.exports = function (filepath, cb) {
	var err = null;
	
	if (filepath.length == 0 && typeof filepath !== 'string') {
		err = 'Filepath must be passed and should be a string';
		cb(err);	
	}
	
	var childSpawn = cp.spawn('mp3info', ['-p', '%S', filepath]);
	var length;

	childSpawn.stdout.on('data', function (stdout) {
		length = stdout.toString();
	});

	childSpawn.stderr.on('data', function (stderr) {
		err = stderr.toString();
	});

	childSpawn.on('close', function () {
		cb(err, length);
	});
};