const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function codSass()
{
    return gulp.src('./codSass/*scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

function imagensMin()
{
    return gulp.src('./imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/imagens'))
}

exports.default = gulp.parallel(codSass,imagensMin)

exports.watch = function()
{
    gulp.watch('./codSass/*scss',gulp.parallel(codSass))
}