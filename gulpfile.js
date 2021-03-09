const { src, dest, watch, parallel } = require("gulp");
const css = require("gulp-sass");
const fileinclude = require("gulp-file-include");

function sass() {
  return src("scss/**/*.scss")
    .pipe(css())
    .pipe(dest("css"));
}

function include() {
  return src(["./html/index.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(dest("./"));
}

function _watch() {
  watch("scss/**/*.scss", sass);
}

exports.watch = _watch;
exports.include = include;
