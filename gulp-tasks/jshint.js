'use strict';

// Busca errores en el JS y nos los muestra por pantalla

module.exports = function( gulp, config, plugins ) {

	var jshint = plugins.jshint;
	var jsFiles = config.jsFiles;

	return function()  {

		gulp.src( jsFiles )
			.pipe( jshint('.jshintrc') )
			.pipe( jshint.reporter('jshint-stylish') )
			.pipe( jshint.reporter('fail') );

	};
};