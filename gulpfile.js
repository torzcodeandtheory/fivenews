'use strict';

var gulp = require('gulp'),
    server = require('gulp-server-livereload'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    runSequence = require('run-sequence'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    notify = require("gulp-notify"),
    plumber = require('gulp-plumber');





gulp.task('webserver', function () {
    gulp.src('frontend')
        .pipe(server({
            livereload: true,
            open: true
        }));
});

gulp.task('templates', function () {
    var YOUR_LOCALS = {};

    gulp.src('./assets/template/**/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(gulp.dest('./frontend/'))
});

gulp.task('scripts', function () {
    return gulp.src('./assets/js/**/*.js')
        .pipe(plumber({
            errorHandler: errorAlert
        }))
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./frontend/js'));
});

gulp.task('sass', function () {
    gulp.src('./assets/sass/**/*.sass')
        //.pipe(sass.sync().on('error', sass.logError))
        .pipe(plumber({
            errorHandler: errorAlert
        }))
        .pipe(sass({
            outputStyle: 'nested',
            noCache: true
        }))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./frontend/css'));

});

gulp.task('default', function (callback) {
    runSequence('scripts',
        'sass',
        'templates',
        callback);
});

gulp.task('watch', function () {
    gulp.watch('./assets/sass/**/*.sass', ['sass']);
    gulp.watch('./assets/js/**/*.js', ['scripts']);
    gulp.watch('./assets/template/**/*.jade', ['templates']);
});


function errorAlert(error) {
    notify.onError({
        title: "JS/SASS Error",
        message: "Check your terminal",
        sound: "Sosumi"
    })(error); //Error Notification
    console.log(error.toString()); //Prints Error to Console
    this.emit("end"); //End function
};
