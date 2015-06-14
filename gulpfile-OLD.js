// TODO: Make this more full-featured and probably like: https://gist.github.com/benske/f80090c87fa97f4e4098


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



gulp.task('html', ['jekyll'], function() {
//gulp.task('html', function() {

    console.log('------------- gulp "html" task starting.');

    // --> Minhtml
    // gulp.src([
    //     path.join(deploy, '*.html'),
    //     path.join(deploy, '*/*/*.html'),
    //     path.join(deploy, '*/*/*/*.html')
    // ])
        //.pipe(htmlmin({collapseWhitespace: true}))
        //.pipe(gulp.dest(deploy))
        //.pipe(browserSync.reload({stream:true, once: true}));

        browserSync.reload({stream:true, once: true});

        console.log('------------- gulp "html" task finishing.');
});


/*
gulp.task('jekyll', function (gulpCallBack){

    console.log('------- gulp "jekyll" task starting.');

    var spawn = require('child_process').spawn;
    // After build: cleanup HTML
    //var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});
    var jekyll = spawn('jekyll', ['serve'], {stdio: 'inherit'});

    console.log('------- gulp "jekyll" task after the spawn call.');

    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
    });
});
*/
// ShakyShane...
var cp          = require('child_process');
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll', function (done) {
    browserSync.notify(messages.jekyllBuild);
    //return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    //    .on('close', done);
    return cp.spawn('jekyll', ['serve'], {stdio: 'inherit'})
            .on('close', done);
});
