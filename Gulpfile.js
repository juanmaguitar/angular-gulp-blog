'use strict';

var gulp = require('gulp');
var taskLoader = require('gulp-simple-task-loader');
var loadPlugins = require('gulp-load-plugins');

var configPlugins = {
	// DEBUG: true,
	pattern: ['gulp-*', 'gulp.*', '[a-z]*'],
}
var plugins = loadPlugins( configPlugins );

var configProject = {

	// dirs path
	dirBase: 'app',
	dirDist: 'dist',

	// app paths
	dirScripts: 'app/scripts',
	dirStylus: 'app/stylesheets/stylus',
	dirCss: 'app/stylesheets/css',
	dirTpl: 'app/views',
	dirImg: 'app/images',
	dirLib: 'app/lib',
	fontsPath : 'app/lib/components-font-awesome/fonts/**',

	htmlFiles : [
		'app/index.html',
		'app/views/post-detail.tpl.html',
		'app/views/post-list.tpl.html',
		'app/views/post-create.tpl.html'
	],

	// dist paths
	dirDistJs: 'dist/js',
	dirDistCss: 'dist/css',
	dirDistImg: 'dist/img',
	dirDistFonts: 'dist/fonts',


	// files pattern path
	jsPatternFiles: '/js/**/*.js',
	stylusPatternFiles: '/stylus/**/*.styl',
	cssPatternFiles: '/css/**/*.css',
	tplPatternFiles: '/views/**/*.tpl.html'

}

var configTasks = {
	taskDirectory: 'gulp-tasks',
	filenameDelimiter: '-',
	tasknameDelimiter: ':',
	plugins: plugins,
	config: configProject
}

taskLoader( configTasks, gulp );