'use strict';

module.exports = function( gulp, config, plugins ) {
	return {
		deps: [ 'templates', 'clean:dist', 'compress', 'copy:fonts', 'uncss' ]
	};
};