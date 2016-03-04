'use strict';

module.exports = function( gulp, config, plugins ) {

	var runSequence = plugins.runSequence;

	return function() {

		runSequence(
			'clean:dist',
			['templates', 'useref', 'copy:fonts'],
			'uncss',
			'compress:js',
			'compress:css'
		)

	};



};