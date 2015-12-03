"user strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // runs local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS and brings node modules over to the browser
var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with gulp

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: '.src/**/*.js',
    dist: './dist',
    mainJs: './src/main.js'
  }
};


// Start a local dev server
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

// when 'open' is run, first run connect
gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
    .pipe(open({
      uri: config.devBaseUrl + ':' + config.port + '/'
    }));
});


gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.mainJs, ['js']);
});

gulp.task('default', ['html', 'js', 'open', 'watch']);
