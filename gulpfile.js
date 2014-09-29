var gulp  = require("gulp"),
    shell = require("gulp-shell"),
    livereload = require('gulp-livereload');

gulp.task('browserify', shell.task(['npm run browserify']));

gulp.task('livereload',['browserify'], function () {
  livereload.changed();
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch([ 'app/js/**/*.js', '!app/js/bundle.js' ], ['livereload']);
});

gulp.task('default', ['watch']);