'use strict';

module.exports = function( gulp, config, plugins ) {

	var browserSync = plugins.browserSync;
	var dirDist = config.dirDist;

	return function() {
		browserSync({
	    server: {
	      baseDir: dirDist
	    }
	  })
	};

};