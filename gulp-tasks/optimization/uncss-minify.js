'use strict';

module.exports = function( gulp, config, plugins ) {

	var uncss = plugins.uncss;
	var cleanCss = plugins.cleanCss;

	var dirDistCss = config.dirDistCss;
	var distCssFiles = dirDistCss + '/**/*.css';
	var htmlFiles = config.htmlFiles;

	return function()  {

		var configUncss = { html: htmlFiles };

		gulp.src( distCssFiles )
			.pipe( uncss(configUncss) )
			.pipe( cleanCss() )
			.pipe( gulp.dest(dirDistCss) );

	};

};