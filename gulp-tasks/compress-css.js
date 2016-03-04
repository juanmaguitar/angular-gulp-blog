'use strict';

module.exports = function( gulp, config, plugins ) {

	var cssnano = plugins.cssnano;
	var dirDist = config.dirDist;
	var distCssFiles = dirDist + '/css/**/*.css';
	var distCssDir = dirDist + '/css';

	return function()  {

		return gulp.src( distCssFiles )
			.pipe( cssnano() )
			.pipe( gulp.dest( distCssDir ) );

	};

};