'use strict';

// Busca errores en el JS y nos los muestra por pantalla

module.exports = function( gulp, config, plugins ) {

	var jshint = plugins.jshint;

	var dirScripts = config.dirScripts;
	var jsFiles = dirScripts + '/**/*.js';

	return function()  {

		gulp.src( jsFiles )
			.pipe( jshint('.jshintrc') )
			.pipe( jshint.reporter('jshint-stylish') )
			.pipe( jshint.reporter('fail') )
			.on('error', function(err) {
				console.log(err)
			})

	};
};