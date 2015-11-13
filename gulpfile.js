'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');

gulp.task('scripts', function() {
  gulp.src('./assets/js/**/*.js')
    .pipe(gulp.dest('./frontend/js'));
});

gulp.task('sass', function() {
  gulp.src('./assets/sass/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({outputStyle: 'nested'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./frontend/css'));

});

gulp.task('build', function(callback) {
  runSequence('scripts',
              'sass',
              callback);
});

gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.sass', ['sass']);
  gulp.watch('./assets/js/**/*.js', ['scripts']);
});