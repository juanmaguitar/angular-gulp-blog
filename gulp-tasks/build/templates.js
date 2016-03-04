'use strict';

module.exports = function( gulp, config, plugins ) {

	var templateCache = plugins.angularTemplatecache;

	var dirTpl = config.dirTpl;
	var tplFiles = dirTpl + '/**/*.tpl.html'

	var dirScripts = config.dirScripts;

	var TEMPLATE_HEADER = '"use strict";angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {';

	return function()  {

		var configTplCache = {
			root: 'views/',
			module: 'blog.templates',
			standalone: true,
			templateHeader : TEMPLATE_HEADER
		};

		return gulp.src( tplFiles )
			.pipe( templateCache(configTplCache) )
			.pipe( gulp.dest(dirScripts) );

	};

};