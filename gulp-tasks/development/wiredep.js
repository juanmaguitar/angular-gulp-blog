'use strict';

// Inyecta las librerias que instalemos via Bower

module.exports = function( gulp, config, plugins ) {

	var wiredep = plugins.wiredep.stream;;

	var dirBase = config.dirBase;
	var dirLib = config.dirLib;
	var pathIndex = dirBase + '/index.html';

	return function()  {

		var configWiredep = { directory: dirLib };

		gulp.src( pathIndex )
			.pipe( wiredep(configWiredep) )
			.pipe( gulp.dest(dirBase) )


	};

};