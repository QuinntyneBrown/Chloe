"use strict";

var gulp = require("gulp");
var concat = require('gulp-concat');

gulp.task('concat-js', function () {
    return gulp.src(["app/**/*.js"])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', ['concat-js'], function () {
    gulp.watch(["app/**/*.js"], ['concat-js']);
});

gulp.task('default', ['concat-js', 'watch']);