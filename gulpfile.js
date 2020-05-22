const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();



//compile scss into css
function style() {
    //1. where is my scss file
    return gulp.src('./scss/main.scss')
        //2. pass that data file through sass compiler
        .pipe(sass())
        //where  do i save the compiled css
        .pipe(gulp.dest('./dist/css'))
}

exports.style = style;