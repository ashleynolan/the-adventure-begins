/**
 * gulp watch
 */
const config = require('../config');
const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('watch', ['compile'], () => {
	gulp.watch([`**/*.scss`], { cwd: config.css.scssDir }, ['css'])
		.on('change', config.gulp.onChange);

	gulp.watch(['**/*'], { cwd: config.svg.srcDir }, ['svg'])
		.on('change', config.gulp.onChange);

	gulp.watch([`${config.img.srcDir}/**/*`], function (event) {
		runSequence('images', 'copy:statixImg');
	});
	gulp.watch(`${config.js.srcDir}/**/*.js`, ['javascript'])
		.on('change', config.gulp.onChange);

	gulp.watch('**/*.{md,hbs}', { cwd: config.statix.dir }, ['assemble'])
		.on('change', config.gulp.onChange)
});

// Alias of watch task
gulp.task('watcher', ['watch'])

