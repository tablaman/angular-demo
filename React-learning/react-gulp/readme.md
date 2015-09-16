## installation instructions

```
npm init
sudo npm install --save gulp gulp-react gulp-concat
npm install -g gulp-cli
sudo npm install --save browserify reactify vinyl-source-stream watchify gulp-util
```



// var gulp = require('gulp');
// var react = require('gulp-react');
// var concat = require('gulp-concat');

// gulp.task('default', function() {
// 	return gulp.src('src/**')
// 		.pipe(react())
// 		.pipe(concat('app.js'))
// 		.pipe(gulp.dest('./public/javascripts'))
// });