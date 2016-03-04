'use strict';

module.exports = function( gulp, config, plugins ) {

	var runSequence = plugins.runSequence;

	return function() {

		runSequence(['inject', 'wiredep', 'browserSync', 'watch'])

	};



};