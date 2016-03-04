'use strict';

module.exports = function( gulp, config, plugins ) {

	var cache = plugins.cache;
	var imagemin = plugins.imagemin;

	var dirImg = config.dirImg;
	var dirDistImg = config.dirDistImg;

	return function()  {

		var configImagenMin = { interlaced: true };

		return gulp.src( dirImg+'/**/*.+(png|jpg|jpeg|gif|svg)')
			// Caching images that ran through imagemin
			.pipe( cache(imagemin(configImagenMin)) )
			.pipe( gulp.dest(dirDistImg) )

	};
};