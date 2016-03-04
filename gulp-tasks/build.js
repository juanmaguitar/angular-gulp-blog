'use strict';

module.exports = function( gulp, config, plugins ) {

	var runSequence = plugins.runSequence;

	return function() {

		runSequence(
			'clean:dist',
			['templates', 'fonts'],
			'useref',
			'uncss:minify',
			'compress:js'
		)

	};



};