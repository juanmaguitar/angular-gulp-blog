'use strict';

// Inyecta las librerias que instalemos via Bower

module.exports = function( gulp, config, plugins ) {

	var wiredep = plugins.wiredep;
	var pathIndex = config.pathIndex;
	var dirBase = config.dirBase;
	var dirLib = config.dirLib;

	return function()  {

		var configWiredep = { directory: dirLib };

	  gulp.src( pathIndex )
	    .pipe( wiredep(configWiredep) )
	    .pipe( gulp.dest(dirBase) );


	};
};