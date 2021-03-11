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
const responsive = require('gulp-responsive');

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

// Responsive Task
function responsiveTask(){
  return src('src/img/srcset/*.{png,jpg}')
    .pipe(
      responsive({
          '*': [
						{width: 527, rename: {suffix: '-319w'}},
						{width: 636, rename: {suffix: '-386w'}},
						{width: 745, rename: {suffix: '-466w'}},
						{width: 853, rename: {suffix: '-631w'}},
						{width: 962, rename: {suffix: '-859w'}},
						{width: 1071, rename: {suffix: '-928w'}},
						{width: 1179, rename: {suffix: '-1108w'}},
						{width: 1288, rename: {suffix: '-1288w'}}
            ]
        },
        {
          quality: 80,
          progressive: true,
          withMetadata: false,
          errorOnEnlargement: false
      })
    )
    .pipe(dest('assets/img/srcset'));
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
	responsiveTask,
  imgTask,
  fontsTask,
  // browsersyncServe,
  // watchTask
);

// Scss
exports.sass = series(scssTask);
