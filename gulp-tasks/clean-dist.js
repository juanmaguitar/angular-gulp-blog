'use strict';

module.exports = function( gulp, config, plugins ) {

	var del = plugins.del;

	return function()  {

		del.sync(['dist/**/*']);

	};
};