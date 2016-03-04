'use strict';

module.exports = function( gulp, config, plugins ) {

	var uncss = plugins.uncss;
	var dirDist = config.dirDist;
	var dirDistCSS = dirDist + "/css";
	var minCssFile = 'dist/css/style.min.css';
	var htmlFiles = [
		'app/index.html',
		'app/views/post-detail.tpl.html',
		'app/views/post-list.tpl.html',
		'app/views/post-create.tpl.html'
	];

	return function()  {

		var configUncss = { html: htmlFiles };

		gulp.src( minCssFile )
			.pipe( uncss(configUncss) )
			.pipe( gulp.dest(dirDistCSS) );

	};

};