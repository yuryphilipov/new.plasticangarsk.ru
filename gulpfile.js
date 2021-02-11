const gulp = require("gulp");
const css = require("gulp-sass");
//var watch = require("gulp-watch");

function sass() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(css())
    .pipe(gulp.dest("css"));
}

function watch() {
  gulp.watch("scss/**/*.scss", sass);
}

exports.default = watch;
