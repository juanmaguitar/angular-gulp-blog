'use strict';

module.exports = function( gulp, config, plugins ) {

	var browserSync = plugins.browserSync;
	var dirBase = config.dirBase;

	return function() {
		browserSync({
	    server: {
	      baseDir: dirBase
	    }
	  })
	};

};