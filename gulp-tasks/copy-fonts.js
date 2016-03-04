'use strict';

module.exports = function( gulp, config, plugins ) {

	var dirLib = config.dirLib;
	var dirDist = config.dirDist;

	var fontsPath = dirLib + '/components-font-awesome/fonts/**';
	var distDirFonts = dirDist + '/fonts';

	return function()  {

		gulp.src( fontsPath )
			.pipe( gulp.dest(distDirFonts) );

	};
};