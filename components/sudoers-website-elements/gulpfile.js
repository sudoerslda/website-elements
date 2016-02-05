var gulp          = require('gulp'),
    reload        = require('gulp-reload'),
    minifyInline  = require('gulp-minify-inline'),
    autoprefix    = require('gulp-autoprefixer'),
    uglify        = require('gulp-uglify'),
    haml          = require('gulp-haml'),
    coffee        = require('gulp-coffee'),
    sass          = require('gulp-sass');

paths     = {
  haml:     [ 'src/**/*.haml' ],
  coffee:   [ 'src/**/*.coffee' ],
  sass:     [ 'src/**/*.sass' ]
};

gulp.task('default',  [ 'coffee', 'sass', 'haml', 'watch' ]);
gulp.task('build',    [ 'coffee', 'sass', 'haml' ]);

// Transpile coffee to uglified js.
gulp.task('coffee', function() {
  return gulp
    .src(paths.coffee)
    .pipe(coffee())
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});
// Transpile sass to css.
gulp.task('sass', function() {
  return gulp
    .src(paths.sass)
    .pipe(sass())
    .pipe(autoprefix({ browsers: ['> 1%'] }))
    .pipe(gulp.dest('./'));
});
// Transpile haml to minified html.
gulp.task('haml', function() {
  return gulp
    .src(paths.haml)
    .pipe(haml())
    .pipe(minifyInline({ css: false }))
    .pipe(gulp.dest('./'));
});

// Automatically reloads gulp when the Gulpfile changes.
gulp.task('reload', function() {
  return gulp
    .src('gulpfile.js')
    .pipe(reload());
});

gulp.task('watch', function() {
  gulp.watch(paths.coffee,  [ 'coffee' ]);
  gulp.watch(paths.sass,    [ 'sass'   ]);
  gulp.watch(paths.haml,    [ 'haml'   ]);
  gulp.watch('gulpfile.js', [ 'reload' ]);
});
