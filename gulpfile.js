const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const prefixer = require("gulp-autoprefixer");
const gcmq = require("gulp-group-css-media-queries");
const fileinclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();
const del = require("del");

function browser() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
}

function css() {
  return src(["./src/scss/**/*.scss", "!./src/scss/**/_*.scss"])
    .pipe(sass())
    .pipe(prefixer({ cascade: false }))
    .pipe(gcmq())
    .pipe(dest("./dist/css"));
}

function html() {
  return src(["./src/html/**/*.html", "!./src/html/**/_*.html"])
    .pipe(fileinclude())
    .pipe(dest("./dist"));
}

function img() {
  return src(["./src/img/**/*.{jpg,png,svg,ico,webp}"]).pipe(
    dest("./dist/img")
  );
}

function js() {
  return src(["./src/js/**/*.js"]).pipe(dest("./dist/js"));
}

function plugins() {
  return src(["./src/plugins/**/*"]).pipe(dest("./dist/plugins"));
}

function clean() {
  return del("dist");
}

function _watch() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  watch("src/html/**/*.html", html).on("change", browserSync.reload);
  watch("src/scss/**/*.scss", css).on("change", browserSync.reload);
  watch("src/js/**/*.js", js).on("change", browserSync.reload);
  watch("src/img/**/*", img).on("change", browserSync.reload);
}

exports.browser = browser;
exports.html = html;
exports.css = css;
exports.img = img;
exports.js = js;
exports.plugins = plugins;

exports.build = series(clean, css, img, js, plugins, html);
exports.serve = series(clean, css, img, js, plugins, html, _watch);
