var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var output = './css/';
var gulpDocs = require('gulp-ngdocs');


// gulp.task('webser', function() {
//     connect.server({
//         livereload: true
//     });
// });

gulp.task('serveprod', function() {
    connect.server({
        port: process.env.PORT || 5000, // localhost:5000
        livereload: false
    });
}); 

gulp.task('default', ['serveprod']);
