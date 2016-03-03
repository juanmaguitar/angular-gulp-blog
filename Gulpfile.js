'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback')

var stylus = require('gulp-stylus'),
    nib = require('nib');

var jshint = require('gulp-jshint');
//var stylish = require('jshint-stylish');

var inject = require('gulp-inject'),
    wiredep = require('wiredep').stream;

var templateCache = require('gulp-angular-templatecache');

var gulpif = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify');

/* -- Task: compress -- */
gulp.task('compress', function(){

    gulp.src('./app/index.html')
      .pipe( useref() )
      .pipe( gulpif('*.js', uglify({ mangle:false })) )
      .pipe( gulpif('*.css', minifyCss()) )
      .pipe( gulp.dest('./dist') );

});

/* -- Task: copy -- */
gulp.task('copy', function() {

  gulp.src('./app/index.html')
    .pipe(useref())
    .pipe( gulp.dest('./dist') );

  gulp.src('./app/lib/fontawesome/fonts/**')
    .pipe(gulp.dest('./dist/fonts'));

})

/* -- Task: templates -- */
gulp.task('templates', function(){
  gulp.src('./app/views/**/*.tpl.html')
    .pipe(templateCache({
      root: 'views/',
      module: 'blog.templates',
      standalone: true
    }))
    .pipe( gulp.dest('./app/scripts') );
});

/* -- Task: inject -- */
// Busca en las carpetas de estilos y javascript los archivos que hayamos creado
// para inyectarlos en el index.HTML
gulp.task('inject', function(){
  var sources = gulp.src(['./app/scripts/**/*.js','./app/stylesheets/**/*.css']);
  return gulp.src('index.html', { cwd: './app' })
    .pipe(inject(sources, {
      read: false,
      ignorePath: '/app'
    }))
    .pipe( gulp.dest('./app') );
});

/* -- Task: wiredep -- */
// Inyecta las librerias que instalemos via Bower
gulp.task('wiredep', function(){
  gulp.src('./app/index.html')
    .pipe( wiredep({
      directory: './app/lib'
    }))
    .pipe( gulp.dest('./app') );
});

/* -- Task: jshint -- */
// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
  return gulp.src('./app/scripts/**/*.js')
    .pipe( jshint('.jshintrc') )
    .pipe( jshint.reporter('jshint-stylish') )
    .pipe( jshint.reporter('fail') );
});

/* -- Task: webserver -- */
// Lanza un servidor local y abre el navegador
gulp.task('server', function() {
  gulp.src('app')
    .pipe(webserver({
      root: './app',
      hostname: '0.0.0.0',
      port: 8080,
      livereload: true,
      open: true
    }));
});

/* -- Task: webserver-dist -- */
// Lanza un servidor local y abre el navegador
gulp.task('server-dist', function() {
  gulp.src('app')
    .pipe(webserver({
      root: './dist',
      hostname: '0.0.0.0',
      port: 8080,
      livereload: true,
      open: true
    }));
});


/* -- Task: css -- */
// Pre-procesa archivos Stylus a CSS y recarga los cambios
gulp.task('css', function(){
  gulp.src('./app/stylesheets/main.styl')
    .pipe( stylus({ use: nib() }) )
    .pipe( gulp.dest('./app/stylesheets') )
    .pipe( connect.reload() );
});

/* -- Task: html -- */
// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function(){
  gulp.src('./app/**/*.html')
    .pipe( connect.reload() );
});

/* -- Task: watch -- */
// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function(){
  gulp.watch(['./app/**/*.html'],['html']);
  gulp.watch(['./app/stylesheets/**/*.styl'],['css']);
  gulp.watch(['./app/scripts/**/*.js'],['jshint']);
  gulp.watch(['./bower.json'],['wiredep']);
});

gulp.task('default', ['server', 'inject', 'wiredep', 'watch']);
gulp.task('build', ['templates', 'compress', 'copy']);
