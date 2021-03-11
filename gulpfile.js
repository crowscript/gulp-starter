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
    .pipe(dest('dist/'));
}

// Sass Task
function scssTask(){
  return src('src/scss/main.scss')
    .pipe(sass())
    .pipe(postcss([cssnano(), autoprefixer()]))
    .pipe(concat('style.css'))
    .pipe(dest('dist/assets/css'));
}

// JavaScript Task
function jsTask(){
  return src('src/js/main.js')
    .pipe(terser())
    .pipe(dest('dist/assets/js'));
}

// Optimize Images
function imgTask(){
  return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/assets/img'));
}

// Responsive Task
function responsiveTask(){
  return src('src/img/srcset/*.{png,jpg}')
    .pipe(
      responsive({
          '*': [
						{width: 319, rename: {suffix: '-319w'}},
						{width: 368, rename: {suffix: '-386w'}},
						{width: 466, rename: {suffix: '-466w'}},
						{width: 631, rename: {suffix: '-631w'}},
						{width: 859, rename: {suffix: '-859w'}},
						{width: 928, rename: {suffix: '-928w'}},
						{width: 1108, rename: {suffix: '-1108w'}},
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
    .pipe(dest('dist/assets/img/srcset'));
}

// Fonts Task
function fontsTask(){
  return src('src/fonts/*')
    .pipe(dest('dist/assets/fonts'));
}

// Fonts Task
function filesTask(){
  return src('src/files/*')
    .pipe(dest('dist/'));
}

// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: 'dist/'
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
	filesTask,
  browsersyncServe,
  watchTask
);

// Scss
exports.sass = series(scssTask);
