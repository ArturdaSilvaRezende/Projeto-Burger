const gulp = require("gulp");
const gulpsass = require("gulp-sass");
const del = require("del");
const concat = require("gulp-concat");
const sourcemap = require("gulp-sourcemaps");
const cssano = require("gulp-cssnano");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const browsersync = require("browser-sync").create();

//task server
function server() {
  browsersync.init({
    server: "./src/",
  });
  gulp
    .watch(["./src/js/**/*.js", "!./src/js/**/*.min.js"], js)
    .on("change", browsersync.reload);
  gulp.watch("./src/**/*.html").on("change", browsersync.reload);
  gulp.watch("./src/scss/**/*.scss", sass).on("change", browsersync.reload);
}

//task html
function html() {
  return gulp.src("./src/**/*.html").pipe(gulp.dest("./dist"));
}

//task sass
function sass() {
  const path = isPro ? "./dist/css" : "./src/css";

  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sourcemap.init())
    .pipe(gulpsass())
    .pipe(
      cssano({
        autoprefixer: {
          browsers: ["> 1%", "last 2 version"],
          add: true,
        },
      })
    )
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest(path));
}

//task clear
function clear() {
  return del("./dist");
}

function clearApp() {
  return del("./src/js/app.min.js")
}

//task js
function js() {
  if (isPro) {
    return gulp
      .src("./src/js/**/*.js")
      .pipe(concat("app.min.js"))
      .pipe(
        babel({
          presets: [
            [
              "env",
              {
                targets: {
                  browsers: [">1%", "last 2 versions"],
                },
              },
            ],
          ],
        })
      )
      .pipe(uglify())
      .pipe(gulp.dest("./src/js"));
  }

  return gulp
    .src("./src/js/**/*.js")
    .pipe(sourcemap.init())
    .pipe(concat("app.min.js"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("./src/js"));
}

//task image
function images() {
  return gulp
    .src(".src/img/**/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img"));
}

//tansk prod
let isPro = false;
function prod(cb) {
  isPro = true;
  cb();
}

//task dev
function dev(cb) {
  isPro = false;
  cb();
}

module.exports.default = gulp.series(
  clearApp,
  dev,
  clear,
  gulp.parallel(html, js, sass, images),
  server
);

module.exports.build = gulp.series(
  prod,
  clear,
  gulp.parallel(html, js, sass, images)
);
