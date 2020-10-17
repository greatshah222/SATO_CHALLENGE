const fs = require('fs');
const path = require('path');

const runSequence = require('run-sequence');
const del = require('del');

const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const rename = require('gulp-rename');

const theo = require('theo');
const gulpTheo = require('gulp-theo');
theo.registerTransform('web', ['color/hex']);

////////////////////////////////////////////////////////////////////
// Paths
////////////////////////////////////////////////////////////////////

const paths = {
  designTokens: './src/design-tokens',
  generated: '.src/.generated',
  output: '.src/.www',
  dist: './dist/theme',
};

////////////////////////////////////////////////////////////////////
// Tasks - Clean
////////////////////////////////////////////////////////////////////

gulp.task('clean', () => del([paths.generated, paths.output, paths.dist]));

gulp.task('clean-theme', () => del([paths.dist]));

////////////////////////////////////////////////////////////////////
// Tasks - Design Tokens
////////////////////////////////////////////////////////////////////

gulp.task('design-tokens', ['styleguide'], () =>
  gulp
    .src('./src/designTokens/app.yaml')
    .pipe(
      gulpTheo({
        transform: { type: 'web' },
        format: { type: 'scss' },
      })
    )
    .pipe(rename('app.scss'))
    .pipe(gulp.dest(paths.generated))
);

gulp.task('styleguide', () =>
  gulp
    .src('./src/designTokens/app.yaml')
    .pipe(
      gulpTheo({
        transform: { type: 'web' },
        format: { type: 'html' },
      })
    )
    .pipe(rename('app.html'))
    .pipe(gulp.dest(paths.generated))
    .pipe(livereload())
);

////////////////////////////////////////////////////////////////////
// Tasks - Site
////////////////////////////////////////////////////////////////////

gulp.task('styles', ['design-tokens'], () =>
  gulp
    .src('src/styleguide/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(paths.output))
    .pipe(livereload())
);

gulp.task('html', () =>
  gulp
    .src('src/styleguide/index.html')
    .pipe(gulp.dest(paths.output))
    .pipe(livereload())
);

////////////////////////////////////////////////////////////////////
// Tasks - Watch
////////////////////////////////////////////////////////////////////

gulp.task('watch', () => {
  livereload.listen({
    port: 35729,
  });
  gulp.watch('src/designTokens/**/*.yaml', ['styles', 'variables']);
  gulp.watch('src/styleguide/**/*.scss', ['styles']);
  gulp.watch('src/styleguide/**/*.html', ['html']);
});

////////////////////////////////////////////////////////////////////
// Tasks - Theme
////////////////////////////////////////////////////////////////////

gulp.task('variables', () =>
  gulp
    .src('./src/designTokens/app.yaml')
    .pipe(
      gulpTheo({
        transform: { type: 'web' },
        format: { type: 'module.js' },
      })
    )
    .pipe(rename('styles.js'))
    .pipe(gulp.dest(paths.generated))
);

gulp.task('dev', ['default'], () => {
  require('./server');
  gulp.start('watch');
});

gulp.task('default', done => runSequence('clean', ['styleguide', 'styles', 'html', 'variables'], done));
