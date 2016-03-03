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

	// files pattern path
	jsFiles: 'app/scripts/**/*.js',
	cssFiles: 'app/stylesheets/**/*.css',
	tplFiles: 'app/views/**/*.tpl.html',

	// dirs path
	dirBase: 'app',
	dirDist: 'dist',
	dirScripts: 'app/scripts',
	dirLib: 'app/lib',

	// files path
	pathIndex: 'app/index.html',

}

var configTasks = {
	taskDirectory: 'gulp-tasks',
	filenameDelimiter: '-',
	tasknameDelimiter: ':',
	plugins: plugins,
	config: configProject
}

taskLoader( configTasks, gulp );