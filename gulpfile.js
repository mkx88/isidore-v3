var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat');

// Paths
var Paths = {
    JS:    'components/js/custom/',
    B_JS:  'components/js/bootstrap/*',
    SCSS:  'components/sass.',
    IMG:   'builds/development/images/',
};

var htmlSources = 'builds/development/*html';

gulp.task('log', function() {
	gutil.log('Isidore V3 is awesome');
});

gulp.task('js', function() {
	gulp.src(Paths.JS + '*js')
	.pipe(concat('script.js'))
	.pipe(gulp.dest('builds/development/js'))
});