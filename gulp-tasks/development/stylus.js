'use strict';

// Pre-procesa archivos Stylus a CSS y recarga los cambios

module.exports = function( gulp, config, plugins ) {

	var stylus = plugins.stylus;
	var nib = plugins.nib;
	var browserSync = plugins.browserSync;

	var dirStylus = config.dirStylus;
	var dirCss = config.dirCss;
	var mainStyleFile = dirStylus + '/main.styl';

	return function( ) {

		gulp.src( mainStyleFile )
			.pipe( stylus({ use: nib() }) )
			.pipe( gulp.dest(dirCss) )
			.pipe( browserSync.stream() );

	};

};