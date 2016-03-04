'use strict';

module.exports = function( gulp, config, plugins ) {

	var del = plugins.del;
	var dirDist = config.dirDist;
	var distFiles = dirDist + '/**/*';

	return function()  {

		return del.sync( [distFiles] );

	};
};