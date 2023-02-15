const gulp = require("gulp");
var uglify = require("gulp-uglify"),
  concat = require("gulp-concat");

gulp.task("default", async function () {
  gulp
    .src("build/static/js/*.js")
    .pipe(uglify())
    .pipe(concat("custom.js"))
    .pipe(gulp.dest("build"));
});
