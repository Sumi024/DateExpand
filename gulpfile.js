var gulp = require('gulp');
var glob = require('glob');
var browserify = require('browserify');
var path = require('path');
var babelify = require('babelify');
var streamTransform = require('vinyl-source-stream');

gulp.task('build-js',function(){
	glob('js/*.js',function(err,files){
		files.map(function(file){
			browserify(file)
				.transform(
					babelify.configure({
						presets : ['env']
					})
				)
				.bundle()
				.pipe(streamTransform(path.basename(file)))
				.pipe(gulp.dest('./'));
		})
	})
});

gulp.task('rev-dev')

gulp.task('build-test',function(){
	let test = gulp.src('js/*.js');
	console.log(test);
});

gulp.task('build-html',['build-js'], function(){
	glob('html/index.html',function(err,files){

	})
})