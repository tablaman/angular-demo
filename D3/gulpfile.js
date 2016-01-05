"user strict";

var gulp = require('gulp');
var babel = require('gulp-babel'); // Babel for jsx and ES6
var connect = require('gulp-connect'); // runs local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS and brings node modules over to the browser
// var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with gulp
var concat = require('gulp-concat'); // concatenates files
// var lint = require('gulp-eslint'); // Lint JS files, including JSX

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
        'node_modules/toastr/build/toastr.css'
    ],
    dist: './dist',
    indexJs: './src/index.js'
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

// html task
gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

// Build JSX components
gulp.task('babel', function () {
  return gulp.src(config.paths.js)
    .pipe(babel())
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
  ;
});

// js task
gulp.task('js', function() {
  browserify(config.paths.indexJs)
    // .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

// Images: migrates images to dist folder
// Note that I could even optimise my images here!
gulp.task ('images', function () {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());

    // publish favicon
    gulp.src('./src/favicon.ico')
      .pipe(gulp.dest(config.paths.dist));
});

// CSS task
gulp.task('css', function () {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/styles'));
});

// Lint task
// Output to console
// not running currently
gulp.task('lint', function () {
  return gulp.src(config.paths.js)
            .pipe(lint({config: 'eslint.config.json'}))
            .pipe(lint.format());
});

// watch task
gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.indexJs, ['js']);
});

// DEFAULT task
gulp.task('default', ['html', 'js', 'css', 'images',  'open', 'watch']);
