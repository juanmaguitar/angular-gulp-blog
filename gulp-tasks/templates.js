'use strict';

module.exports = function( gulp, config, plugins ) {

	var templateCache = plugins.angularTemplatecache;
	var tplFiles = config.tplFiles;
	var cssFiles = config.cssFiles;
	var dirScripts = config.dirScripts;

	var TEMPLATE_HEADER = '"use strict";angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {';

	return function()  {

		var configTplCache = {
			root: 'views/',
			module: 'blog.templates',
			standalone: true,
			templateHeader : TEMPLATE_HEADER
		};

		return gulp.src('./app/views/**/*.tpl.html')
			.pipe( templateCache(configTplCache) )
			.pipe( gulp.dest('./app/scripts') );

	};

};