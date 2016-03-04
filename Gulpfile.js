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

	dirScripts: this.dirBase + '/scripts',
	dirStyles: this.dirBase + '/stylesheets',
	dirLib: this.dirBase + '/lib',

	// files pattern path
	jsFiles: '/js/**/*.js',
	cssFiles: '/stylesheets/**/*.css',
	tplFiles: '/views/**/*.tpl.html'

}

var configTasks = {
	taskDirectory: 'gulp-tasks',
	filenameDelimiter: '-',
	tasknameDelimiter: ':',
	plugins: plugins,
	config: configProject
}

taskLoader( configTasks, gulp );