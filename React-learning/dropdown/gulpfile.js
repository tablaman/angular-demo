

var gulp = require('gulp');
var gutil = require('gulp-util');				// for debugging onto console
var source = require('vinyl-source-stream');	// for throwing textfiles from one process to another
var browserify = require('browserify');			// figure out code dependencies and loading 
var watchify = require('watchify');				// re-run gulp whenever code changes
var reactify = require('reactify');				// works in conjuction with browserify to convert jsx to js

gulp.task('default', function () {
	var bundler = watchify(browserify({
		entries: ['./src/app.jsx'],
		transform: [reactify],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));
	
	function build (file) {
		if (file) gutil.log('Rebuilding ' + file);
		
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error!'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./public/javascripts'));
	};
	build();
	bundler.on ('update', build);
});

