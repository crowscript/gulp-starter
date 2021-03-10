const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('autoprefixer');
const fileinclude = require('gulp-file-include');

// HTML Include Task
function includeHTML(){
  return src([
    'src/html/*',
		'!src/html/partials',
    '!head.html'
    ])
    .pipe(fileinclude({prefix: '@@', basepath: '@file'}))
    .pipe(dest('.'));
}

// Sass Task
function scssTask(){
  return src('src/scss/main.scss')
    .pipe(sass())
    .pipe(postcss([cssnano(), autoprefixer()]))
    .pipe(concat('style.css'))
    .pipe(dest('.'));
}

// JavaScript Task
function jsTask(){
  return src('src/js/main.js')
    .pipe(terser())
    .pipe(dest('assets/js'));
}

// Optimize Images
function imgTask(){
  return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('assets/img'));
}

// Fonts Task
function fontsTask(){
  return src('src/fonts/*')
    .pipe(dest('assets/fonts'));
}

// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
  watch(['src/html/**/*.html','src/scss/**/*.scss', 'src/js/**/*.js'], series(includeHTML, scssTask, jsTask, imgTask, browsersyncReload));
}

// Tasks:
// Default
exports.default = series(
	includeHTML,
  scssTask,
  jsTask,
  imgTask,
  fontsTask,
  browsersyncServe,
  watchTask
);

// Scss
exports.sass = series(scssTask);
