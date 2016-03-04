'use strict';

// Recarga el navegador cuando hay cambios en el HTML

module.exports = function( gulp, config, plugins ) {

	var browserSync = plugins.browserSync;

	return function()  {

		return gulp.src('./app/**/*.html')
			.pipe( browserSync.stream() );

	};

};