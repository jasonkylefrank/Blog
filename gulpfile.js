var gulp = require('gulp'),
    browserSync = require('browser-sync');



gulp.task('browser-sync', function() {
  var files = [
    '_site/**/*.html',
    '_site/**/*.css',
    '_site/**/*.png',
    '_site/**/*.jpg',
    '_site/**/*.svg',
    '_site/**/*.js'
  ];

  browserSync.init(files, {
    server: {
      baseDir: './_site'
    }
  });
});
