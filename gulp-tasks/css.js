'use strict';

module.exports = function( gulp, config, plugins ) {

	var stylus = plugins.stylus;
	var nib = plugins.nib;
	var connect = plugins.connect;

	return function( ) {

		gulp.src( 'app/stylesheets/main.styl' )
			.pipe( stylus({ use: nib() }) )
			.pipe( gulp.dest('app/stylesheets') )
			.pipe( connect.reload() );

	};

};