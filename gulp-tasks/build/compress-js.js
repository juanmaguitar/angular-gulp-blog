'use strict';

module.exports = function( gulp, config, plugins ) {

	var uglify = plugins.uglify;
	var dirDistJs = config.dirDistJs;
	var distJsFiles = dirDistJs + '/**/*.js';

	return function()  {

		var configUglify = { mangle:false };

		return gulp.src( distJsFiles )
			.pipe( uglify(configUglify) )
			.pipe( gulp.dest( dirDistJs ) );

	};

};