var gulp = require('gulp');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var babel = require("gulp-babel");

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['*.html', '*.css', './src/*.js', '.dist/*.js'], {cwd: './'}, reload);
});


gulp.task('default', () => {
    return gulp.src('./src/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'));
});
