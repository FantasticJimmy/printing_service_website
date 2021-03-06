var gulp = require('gulp');
var jsFiles = ['*.js', 'src/**/*.js','src/**/*.ejs'];
var nodemon = require('gulp-nodemon');



// gulp.task('inject', function () {
//     var wiredep = require('wiredep').stream;
//     var inject = require('gulp-inject');
//     var injectSrc = gulp.src(['./public/css/*.css',
//                               './public/js/*.js'], {
//         read: false
//     });
//     var injectOptions = {
//         ignorePath: '/public'
//     };


//     var options = {
//         bowerJson: require('./bower.json'),
//         directory: './public/lib',
//         ignorePath: '../../public'
//     };
//     return gulp.src('./src/views/*.html')
//         .pipe(wiredep(options))
//         .pipe(inject(injectSrc, injectOptions))
//         .pipe(gulp.dest('./src/views'));
// });

gulp.task('serve', function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting.....');
        });
});