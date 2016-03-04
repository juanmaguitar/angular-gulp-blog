'use strict';

// Pre-procesa archivos Stylus a CSS y recarga los cambios

module.exports = function( gulp, config, plugins ) {

	var stylus = plugins.stylus;
	var nib = plugins.nib;
	var connect = plugins.connect;

	var dirStyles = config.dirStyles;
	var mainStyleFile = dirStyles + '/main.styl';

	return function( ) {

		gulp.src( mainStyleFile )
			.pipe( stylus({ use: nib() }) )
			.pipe( gulp.dest(dirStyles) )
			.pipe( connect.reload() );

	};

};