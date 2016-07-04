'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function () {
  return gulp.src('./sass/main.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css/style.css'))
    .pipe(notify("SASS compiled!"));;
});

gulp.task('prefix', function () {
	return gulp.src('./css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist'));
});
gulp.task('mincss', function() {
    gulp.src('./css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function () {

    gulp.watch('./sass/*.sass', ['sass']);
    gulp.watch('./css/*.css', ['prefix','mincss']);
    
});

