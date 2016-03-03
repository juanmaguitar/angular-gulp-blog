'use strict';

module.exports = function( gulp, config, plugins ) {

	var fontsPath = 'app/lib/components-font-awesome/fonts/**';
	var distDirFonts = 'dist/fonts';

	return function()  {

		gulp.src( fontsPath )
			.pipe( gulp.dest(distDirFonts) );

	};
};