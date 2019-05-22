"use strict";

const $ = require("gulp-load-plugins")();
const gulp = require("gulp");

module.exports = function(options) {
  return function() {
    return gulp
      .src(options.src, { since: gulp.lastRun("build:assets") })
      .pipe(
        $.newer({
          dest: "options.dst",
          ext: ".js"
        })
      )
      .pipe($.imagemin())
      .pipe(gulp.dest(options.dst));
  };
};
