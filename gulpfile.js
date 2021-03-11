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
            {width: 93, rename: {suffix: '-93w'}},
            {width: 201, rename: {suffix: '-201w'}},
						{width: 310, rename: {suffix: '-310'}},
						{width: 419, rename: {suffix: '-419w'}},
						{width: 527, rename: {suffix: '-527w'}},
						{width: 636, rename: {suffix: '-636w'}},
						{width: 745, rename: {suffix: '-745w'}},
						{width: 853, rename: {suffix: '-853w'}},
						{width: 962, rename: {suffix: '-962w'}},
						{width: 1071, rename: {suffix: '-1071w'}},
						{width: 1179, rename: {suffix: '-1179w'}},
						{width: 1288, rename: {suffix: '-1288w'}},
						{width: 78, rename: {suffix: '-78w'}},
						{width: 171, rename: {suffix: '-171w'}},
						{width: 265, rename: {suffix: '-265w'}},
						{width: 359, rename: {suffix: '-359w'}},
						{width: 452, rename: {suffix: '-452w'}},
						{width: 546, rename: {suffix: '-546w'}},
						{width: 640, rename: {suffix: '-640w'}},
						{width: 733, rename: {suffix: '-733w'}},
						{width: 827, rename: {suffix: '-827w'}},
						{width: 921, rename: {suffix: '-921w'}},
						{width: 1014, rename: {suffix: '-1014w'}},
						{width: 1108, rename: {suffix: '-1108w'}},
						{width: 63, rename: {suffix: '-63w'}},
						{width: 141, rename: {suffix: '-141w'}},
						{width: 220, rename: {suffix: '-220w'}},
						{width: 299, rename: {suffix: '-299w'}},
						{width: 377, rename: {suffix: '-377w'}},
						{width: 456, rename: {suffix: '-456w'}},
						{width: 535, rename: {suffix: '-535w'}},
						{width: 613, rename: {suffix: '-613w'}},
						{width: 692, rename: {suffix: '-692w'}},
						{width: 771, rename: {suffix: '-771w'}},
						{width: 849, rename: {suffix: '-849w'}},
						{width: 928, rename: {suffix: '-928w'}},
						{width: 57, rename: {suffix: '-57w'}},
						{width: 130, rename: {suffix: '-130w'}},
						{width: 203, rename: {suffix: '-203w'}},
						{width: 276, rename: {suffix: '-276w'}},
						{width: 349, rename: {suffix: '-349w'}},
						{width: 422, rename: {suffix: '-422w'}},
						{width: 494, rename: {suffix: '-494w'}},
						{width: 567, rename: {suffix: '-567w'}},
						{width: 640, rename: {suffix: '-640w'}},
						{width: 713, rename: {suffix: '-713w'}},
						{width: 786, rename: {suffix: '-786w'}},
						{width: 859, rename: {suffix: '-859w'}},
						{width: 200, rename: {suffix: '-200w'}},
						{width: 254, rename: {suffix: '-254w'}},
						{width: 308, rename: {suffix: '-308w'}},
						{width: 361, rename: {suffix: '-361w'}},
						{width: 415, rename: {suffix: '-415w'}},
						{width: 469, rename: {suffix: '-469w'}},
						{width: 523, rename: {suffix: '-523w'}},
						{width: 571, rename: {suffix: '-571w'}},
						{width: 631, rename: {suffix: '-631w'}},
						{width: 225, rename: {suffix: '-225w'}},
						{width: 265, rename: {suffix: '-265w'}},
						{width: 305, rename: {suffix: '-305w'}},
						{width: 346, rename: {suffix: '-346w'}},
						{width: 386, rename: {suffix: '-386w'}},
						{width: 426, rename: {suffix: '-426w'}},
						{width: 466, rename: {suffix: '-466w'}},
						{width: 152, rename: {suffix: '-152w'}},
						{width: 319, rename: {suffix: '-319w'}}
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
