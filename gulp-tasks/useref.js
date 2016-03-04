'use strict';

module.exports = function( gulp, config, plugins ) {

	var useref = plugins.useref;
	var uglify = plugins.uglify;
	var cssnano = plugins.cssnano;
	var gulpIf = plugins.if;


	var dirBase = config.dirBase;
	var dirDist = config.dirDist;

	return function()  {

		return gulp.src( dirBase + '/index.html')
			.pipe( useref() )
			.pipe( gulp.dest(dirDist) )

	};
};