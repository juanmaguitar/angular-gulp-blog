'use strict';

module.exports = function( gulp, config, plugins ) {

	var uglify = plugins.uglify;
	var jsFiles = config.jsFiles;
	var dirDist = config.dirDist;
	var distJsFiles = dirDist + jsFiles;
	var distJsDir = dirDist + '/js';

	return function()  {

		var configUglify = { mangle:false };

		return gulp.src( distJsFiles )
			.pipe( uglify(configUglify) )
			.pipe( gulp.dest( distJsDir ) );

	};

};