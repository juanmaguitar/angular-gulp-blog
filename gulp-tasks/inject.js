'use strict';

// Busca en las carpetas de estilos y javascript los archivos que hayamos creado
// para inyectarlos en el index.HTML

module.exports = function( gulp, config, plugins ) {

	var inject = plugins.inject;
	var jsFiles = config.jsFiles;
	var cssFiles = config.cssFiles;
	var dirBase = config.dirBase;

	return function() {

		var sources = gulp.src([ jsFiles, cssFiles ]);
		var configInject = {
			read: false,
			ignorePath: '/' + dirBase
		}

		gulp.src('index.html', { cwd: dirBase })
			.pipe( inject(sources, configInject) )
			.pipe( gulp.dest(dirBase) );
	};

};