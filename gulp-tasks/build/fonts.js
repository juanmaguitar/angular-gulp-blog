'use strict';

module.exports = function( gulp, config, plugins ) {

	var fontsPath = config.fontsPath;
	var dirDistFonts = config.dirDistFonts;

	return function()  {

		gulp.src( fontsPath )
			.pipe( gulp.dest(dirDistFonts) );

	};
};