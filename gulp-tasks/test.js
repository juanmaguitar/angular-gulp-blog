'use strict';

module.exports = function( gulp, config, plugins ) {

	var notify = plugins.notify;

	return function()  {

		var msg = "Found file: <%= file.relative %>!"
		console.log ("What's the buzz!!");

		return gulp.src('app/*.html')
			.pipe( notify(msg) )

	};
};