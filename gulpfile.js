var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {
    gulp.src('./client-src/js/index.js')
    	.pipe(browserify())
        .pipe(gulp.dest('./public/builds/js'))
});

gulp.task('watch-development', function() {
	return gulp.watch('./client-src/js/*.js', ['scripts']);
});

process.on('uncaughtException', function() {
	console.error.bind(console);
});

gulp.task('default', ['scripts']);